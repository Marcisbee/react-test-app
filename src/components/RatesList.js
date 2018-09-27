import React from 'react';

export default function RatesList({rates = {}}) {
  const currencies = Object.keys(rates) || [];
  return (
    <tbody>
      { currencies.map(currency => (
        <tr key={'currency-'.concat(currency)}>
          <td>{currency}</td>
          <td>{rates[currency].toFixed(2)}</td>
        </tr>
      )) }
    </tbody>
  )
}
