import {
  DISMISS_ERROR,
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './actions';
import reducers from './reducers';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {})).toEqual({
      data: null,
      loading: false,
      errored: null,
    })
  })

  it('should handle DISMISS_ERROR', () => {
    expect(
      reducers({}, {
        type: DISMISS_ERROR,
      })
    ).toEqual({
      errored: null,
    })
  })

  it('should handle FETCH', () => {
    expect(
      reducers({}, {
        type: FETCH
      })
    ).toEqual({
      loading: true,
      errored: null,
    })
  })

  it('should handle FETCH_SUCCESS', () => {
    const payload = 'foo';
    expect(
      reducers({}, {
        type: FETCH_SUCCESS,
        payload,
      })
    ).toEqual({
      data: payload,
      loading: false,
      errored: null,
    })
  })

  it('should handle FETCH_ERROR', () => {
    const payload = 'foo';
    expect(
      reducers({}, {
        type: FETCH_ERROR,
        payload,
      })
    ).toEqual({
      loading: false,
      errored: payload,
    })
  })
})
