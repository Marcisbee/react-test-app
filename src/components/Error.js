import React from 'react';
import { connect } from 'react-redux';

import RatesList from './RatesList';

import { dismissErrorAction } from '../store/actions';

export function Error({ errored, dismissErrorAction }) {
  return (
    <div>
      {errored && (
        <div className="modal">
          <div
            className="modal-backdrop"
            onClick={dismissErrorAction}>
          </div>
          <div className="modal-content">
            <p>{errored.error || errored.toString()}</p>
            <button onClick={dismissErrorAction}>
              Dismiss
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default connect(
  (state) => ({
    errored: state.errored,
  }),
  (dispatch) => ({
    dismissErrorAction: () => dispatch(dismissErrorAction()),
  }),
)(Error);
