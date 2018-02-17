import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('app');
ReactDOM.render(<AppContainer><App /></AppContainer>, rootElement);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default; // eslint-disable-line
    ReactDOM.render(<AppContainer><NextApp /></AppContainer>, rootElement);
  });
}
