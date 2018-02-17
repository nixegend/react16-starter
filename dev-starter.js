const appSettings = require('./app-settings');
const open = require('open');
// const nodemon = require('nodemon');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config');

// nodemon({
//   ext: 'js',
//   watch: ['server/'],
// }).on('start', () => {
//   console.log('==========================\nNODEMON => App has started\n==========================');
// }).on('restart', (files) => {
//   console.log('-------------------------\nNODEMON => App restarted due to:\n', `${files}\n-------------------------`);
// });

new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer)
  .listen(appSettings.clientPort, appSettings.clientHost, (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`Listening at >>> http://${appSettings.clientHost}:${appSettings.clientPort}/ <<<`);
    open(`http://${appSettings.clientHost}:${appSettings.clientPort}/`);
  });
