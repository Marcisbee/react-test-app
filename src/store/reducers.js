import {
  DISMISS_ERROR,
  FETCH,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './actions';

const initialState = {
  data: null,
  loading: false,
  errored: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH:
      return {
        ...state,
        loading: true,
        errored: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        errored: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        errored: action.payload,
      };
    case DISMISS_ERROR:
      return {
        ...state,
        errored: null,
      };
    default:
      return state;
  }
}
