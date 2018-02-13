const config = require('./config');
const open = require('open');
const nodemon = require('nodemon');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const wConfig = require('./webpack.config');

nodemon({
  ext: 'js',
  watch: ['server/'],
}).on('start', () => {
  console.log('==========================\nNODEMON => App has started\n==========================');
}).on('restart', (files) => {
  console.log('-------------------------\nNODEMON => App restarted due to:\n', `${files}\n-------------------------`);
});

new WebpackDevServer(webpack(wConfig), wConfig.devServer)
  .listen(config.clientPort, config.clientHost, (err) => {
    if (err) {
      console.log(err);
    }

    console.log(`Listening at >>> http://${config.clientHost}:${config.clientPort}/ <<<`);
    open(`http://${config.clientHost}:${config.clientPort}/`);
  });
