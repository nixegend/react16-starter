const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require(path.join(__dirname, './webpack-cfg/base')); // eslint-disable-line

const configs = {
  development: require(path.join(__dirname, './webpack-cfg/dev')), // eslint-disable-line
  production: require(path.join(__dirname, './webpack-cfg/prod')), // eslint-disable-line
  staging: require(path.join(__dirname, './webpack-cfg/stage')), // eslint-disable-line
};

const { NODE_ENV } = process.env;

const settings = {
  srcFolder: path.join(__dirname, './src'),
  distFolder: path.join(__dirname, './build'),
  clientHost: 'localhost',
  serverHost: 'localhost',
  clientPort: 8080,
  serverPort: 3000,
  apiUrl: '/api',
};

const resultConfig = Object.assign({}, configs[NODE_ENV](settings, NODE_ENV), baseConfig(settings, NODE_ENV));

resultConfig.plugins.push(new HtmlWebpackPlugin({ template: `${settings.srcFolder}/template.ejs` }));
resultConfig.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': `"${NODE_ENV}"` }));

module.exports = resultConfig;
