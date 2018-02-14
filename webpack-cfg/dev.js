const { resolve } = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const config = require('../config');

const resultConfig = Object.assign({}, {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.clientHost}:${config.clientPort}`,
    'webpack/hot/only-dev-server',
    './src/index.hot-loader',
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({ files: ['src/**/*.css'] }),
  ],

  devServer: {
    contentBase: resolve(__dirname, config.static),
    publicPath: config.urlBasePath,
    hot: true,
    historyApiFallback: true,
    host: config.clientHost,
    port: config.clientPort,
  },

}, baseConfig);

module.exports = resultConfig;
