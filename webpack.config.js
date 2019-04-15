const { NODE_ENV, VM_TYPE } = process.env;

const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require(path.join(__dirname, './webpack-cfg/base'));

const configs = {
  dev: require(path.join(__dirname, './webpack-cfg/dev')),
  prod: require(path.join(__dirname, './webpack-cfg/prod')),
  stage: require(path.join(__dirname, 'webpack-cfg/stage')),
  qa: require(path.join(__dirname, 'webpack-cfg/stage'))
};

const settings = {
  vmType: VM_TYPE,
  env: NODE_ENV,
  isProd: NODE_ENV === 'production',
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  static: path.join(__dirname, './static'),
  publicPath: '/',
  protocol: 'http',
  host: 'localhost',
  port: 3000
};

module.exports = merge(baseConfig(settings), configs[VM_TYPE](settings));
