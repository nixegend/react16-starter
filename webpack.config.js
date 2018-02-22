const { NODE_ENV } = process.env;
const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require(path.join(__dirname, './webpack-cfg/base')); // eslint-disable-line

const configs = {
  development: require(path.join(__dirname, './webpack-cfg/dev')), // eslint-disable-line
  production: require(path.join(__dirname, './webpack-cfg/prod')), // eslint-disable-line
  staging: require(path.join(__dirname, './webpack-cfg/stage')), // eslint-disable-line
};

const settings = {
  env: NODE_ENV,
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './build'),
  publicPath: '/',
  https: false,
  host: 'localhost',
  port: 8080,
};

module.exports = merge(baseConfig(settings), configs[NODE_ENV](settings));
