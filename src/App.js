import React from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader';

import Loading from './components/Loading';
import Table from './components/Table';
import Error from './components/Error';
import { fetchAction } from './store/actions';

export function App({
  errored,
  loading,
  fetchAction,
}) {
  return (
    <div>
      <h1>Rates app</h1>
      <button
        disabled={loading}
        onClick={fetchAction}
      >
        Gather data
      </button>
      {loading && <Loading/>}
      <Table/>
      <Error/>
    </div>
  );
}

const connectedApp = connect(
  (state) => ({
    loading: state.loading,
    errored: state.errored,
  }),
  (dispatch) => ({
    fetchAction: () => dispatch(fetchAction()),
  }),
)(App);

export default hot(module)(connectedApp);
