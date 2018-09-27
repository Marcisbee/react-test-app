import {
  FETCH,
  fetchSuccessAction,
  fetchErrorAction,
} from './actions';

import {
  filterResponse,
  getFilteredResponse,
} from '../helpers';

const url = 'https://api.exchangeratesapi.io/latest';

export function DataLoader () {
  return store => dispatch => action => {
    dispatch(action);

    switch (action.type) {
      case FETCH:
        fetch(url)
          .then(filterResponse)
          .then(data => dispatch(
            fetchSuccessAction(data)
          ))
          .catch(
            getFilteredResponse(data => dispatch(
              fetchErrorAction(data)
            ))
          );
    }
  }
}
