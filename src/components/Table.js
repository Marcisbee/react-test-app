import React from 'react';
import { connect } from 'react-redux';

import RatesList from './RatesList';

function Table({ data }) {
  return (
    <div className="rates-table-container">
      {
        data
          ? (
            <table>
              <thead>
                <tr>
                  <th colSpan="2">{data.base} exchange rate</th>
                </tr>
                <tr>
                  <td colSpan="2"><strong>1 {data.base}</strong></td>
                </tr>
              </thead>
              <RatesList
                rates={data.rates}
              />
            </table>
          )
          : 'No data gathered yet'
      }
    </div>
  );
}

export default connect(
  (state) => ({
    data: state.data,
  }),
  dispatch => ({ dispatch }),
)(Table);
