const NODE_ENV = process.env.npm_config_env || 'development';
const webpack = require('webpack');
const { resolve } = require('path');

const configs = {
  development: require(resolve(__dirname, './webpack-cfg/dev')), // eslint-disable-line
  production: require(resolve(__dirname, './webpack-cfg/prod')), // eslint-disable-line
  staging: require(resolve(__dirname, './webpack-cfg/stage')), // eslint-disable-line
};

configs[NODE_ENV].plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
}));

module.exports = configs[NODE_ENV];
