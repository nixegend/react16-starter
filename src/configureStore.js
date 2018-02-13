import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';

import mainReducer from './mainReducer';

const configureStore = (history) =>
  createStore(mainReducer, compose(
    applyMiddleware(routerMiddleware(history), thunk, apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

export default configureStore;
