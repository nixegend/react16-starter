const NODE_ENV = process.env.npm_config_env || 'development';
const webpack = require('webpack');
const { resolve } = require('path');

process.env.NODE_ENV = (NODE_ENV === 'development') ? 'development' : 'production';

const configs = {
  development: require(resolve(__dirname, './webpack-cfg/dev')),
  production: require(resolve(__dirname, './webpack-cfg/prod')),
  staging: require(resolve(__dirname, './webpack-cfg/stage')),
};

configs[NODE_ENV].plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
}));

module.exports = configs[NODE_ENV];
