import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { apiMiddleware } from 'redux-api-middleware';
import apiErrorMiddleware from './common/middlewares/api-error';

import mainReducer from './main-reducer';

const configureStore = history => {
  const store = createStore(
    mainReducer,
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        apiMiddleware,
        apiErrorMiddleware
      )
    )
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('./main-reducer', () => {
      const nextMainReducer = require('./main-reducer').default; // eslint-disable-line
      store.replaceReducer(nextMainReducer);
    });

    window.store = store;
  }

  return store;
};

export default configureStore;
