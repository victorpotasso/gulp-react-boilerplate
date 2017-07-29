import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './data/reducers';
import middlewares from './data/middlewares';

export default createStore(
  reducers,
  compose(
    applyMiddleware(thunk, ...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f, // for redux chrome extension
  ),
);
