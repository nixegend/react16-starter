import './common/styles/reset.scss';
import './common/styles/common.scss';

import 'react-app-polyfill/ie11';

import React from 'react';
import { hot } from 'react-hot-loader/root';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import MainLayout from './pages/MainLayout';
import configureStore from './configure-store';

const history = createBrowserHistory();
const store = configureStore(history);
syncHistoryWithStore(history, store);

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </Provider>
);

export default hot(App);
