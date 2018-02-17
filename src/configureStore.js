import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { apiMiddleware } from 'redux-api-middleware';

import mainReducer from './mainReducer';

const configureStore = (history) => {
  const store = createStore(mainReducer, compose(
    applyMiddleware(routerMiddleware(history), thunk, apiMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ));

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./mainReducer', () => {
      const nextMainReducer = require('./mainReducer').default; // eslint-disable-line
      store.replaceReducer(nextMainReducer);
    });
  }

  return store;
};

export default configureStore;
