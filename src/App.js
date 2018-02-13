import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './configureStore';
import './common.scss';

const history = createHistory();
const store = configureStore(history);
syncHistoryWithStore(history, store);

// expose for debugging
window.store = store;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>{routes}</BrowserRouter>
  </Provider>
);

export default App;
