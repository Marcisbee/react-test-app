import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './actions';
import {
  DataLoader,
} from './middleware';

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }

  if (action.type === FETCH) {
    Promise
      .resolve({
        type: FETCH_SUCCESS,
        payload: { foo: 'bar' },
      })
      .then(act => dispatch(act));
  }

  return next(action);
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  }
  const next = jest.fn()

  const invoke = (action) => thunk(store)(next)(action)

  return { store, next, invoke }
}

it('passes through non-function action', () => {
  const { next, invoke } = create()
  const action = { type: FETCH }
  invoke(action)
  expect(next).toHaveBeenCalledWith(action)
})

it('calls the function', () => {
  const { invoke } = create()
  const fn = jest.fn()
  invoke(fn)
  expect(fn).toHaveBeenCalled()
})

it('passes dispatch and getState', () => {
  const { store, invoke } = create()
  invoke((dispatch, getState) => {
    dispatch('TEST DISPATCH')
    getState()
  })
  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
  expect(store.getState).toHaveBeenCalled()
})

describe('middleware', () => {
  it('dispatch FETCH_SUCCESS', async () => {
    const { store, invoke } = create();
    const action = { type: FETCH };

    await invoke(action);

    expect(
      store.dispatch.mock.calls[0][0]
    ).toEqual({
      type: FETCH_SUCCESS,
      payload: { foo: 'bar' },
    });
  });
})
