const { resolve } = require('path');
const webpack = require('webpack');
const baseConfig = require('./base');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const appSettings = require('../app-settings');

const resultConfig = Object.assign({}, {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${appSettings.clientHost}:${appSettings.clientPort}`,
    'webpack/hot/only-dev-server',
    './src/index.hot-loader',
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({ files: ['src/**/*.scss'] }),
  ],

  devServer: {
    contentBase: resolve(__dirname, appSettings.static),
    publicPath: appSettings.urlBasePath,
    hot: true,
    historyApiFallback: true,
    host: appSettings.clientHost,
    port: appSettings.clientPort,
  }

}, baseConfig);

module.exports = resultConfig;
