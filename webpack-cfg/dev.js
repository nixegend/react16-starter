const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = (settings) => ({
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${settings.clientHost}:${settings.clientPort}`,
    'webpack/hot/only-dev-server',
    `${settings.srcFolder}/index.hot-loader`,
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({ files: [`${settings.srcFolder}/**/*.scss`] }),
  ],

  devServer: {
    contentBase: settings.distFolder,
    publicPath: '/',
    hot: true,
    historyApiFallback: true,
    host: settings.clientHost,
    port: settings.clientPort,
  },
});
