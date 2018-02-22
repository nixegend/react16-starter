const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = (settings) => ({
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?${settings.https ? 'https' : 'http'}://${settings.host}:${settings.port}`,
    'webpack/hot/only-dev-server',
    `${settings.src}/index.hot-loader`,
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new StyleLintPlugin({
      syntax: 'scss',
      configFile: '.stylelintrc',
      context: settings.src,
      files: '**/*.scss',
    }),
  ],

  devServer: {
    publicPath: settings.publicPath,
    historyApiFallback: true,
    host: settings.host,
    port: settings.port,
    https: settings.https,
    hot: true,
  },
});
