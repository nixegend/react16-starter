const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = (settings) => ({
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${settings.host}:${settings.port}`,
    'webpack/hot/only-dev-server',
    `${settings.src}/index.hot-loader`,
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new StyleLintPlugin({ files: [`${settings.src}/**/*.scss`] }),
  ],

  devServer: {
    publicPath: settings.publicPath,
    historyApiFallback: true,
    host: settings.host,
    port: settings.port,
    https: false,
    hot: true,
  },
});
