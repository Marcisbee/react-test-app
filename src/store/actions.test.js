import {
  DISMISS_ERROR,
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
  dismissErrorAction,
  fetchAction,
  fetchErrorAction,
  fetchSuccessAction,
} from './actions';

describe('actions', () => {
  it('should create an action to dismiss error', () => {
    const expectedAction = {
      type: DISMISS_ERROR,
    }
    expect(dismissErrorAction()).toEqual(expectedAction)
  })

  it('should create an action for fetch', () => {
    const expectedAction = {
      type: FETCH,
    }
    expect(fetchAction()).toEqual(expectedAction)
  })

  it('should create an action for successful fetch', () => {
    const payload = 'foo'
    const expectedAction = {
      type: FETCH_SUCCESS,
      payload,
    }
    expect(fetchSuccessAction(payload)).toEqual(expectedAction)
  })

  it('should create an action for errored fetch', () => {
    const payload = 'foo'
    const expectedAction = {
      type: FETCH_ERROR,
      payload,
    }
    expect(fetchErrorAction(payload)).toEqual(expectedAction)
  })
})
