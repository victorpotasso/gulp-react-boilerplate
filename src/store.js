import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './data/reducers';

export const middlewares = [
  thunk,
];

export default createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f, // for redux chrome extension
  ),
);
