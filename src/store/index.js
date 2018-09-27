import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import { DataLoader } from './middleware';

const store = createStore(reducers, {}, applyMiddleware(
  DataLoader()
));

export default store;
