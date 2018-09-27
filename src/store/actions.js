export const DISMISS_ERROR = 'DISMISS_ERROR';
export const FETCH = 'FETCH';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';

export function fetchAction() {
  return{
    type: FETCH,
  };
}

export function fetchSuccessAction(payload) {
  return{
    type: FETCH_SUCCESS,
    payload,
  };
}

export function fetchErrorAction(payload) {
  return{
    type: FETCH_ERROR,
    payload,
  };
}

export function dismissErrorAction() {
  return{
    type: DISMISS_ERROR,
  };
}
