import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './src/App';
import store from './src/store';

import './assets/scss/main.scss';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(
  <Root/>,
  document.getElementById('app')
);
