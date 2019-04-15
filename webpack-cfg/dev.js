const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = settings => ({
  devtool: 'source-map',
  mode: 'development',

  entry: [`${settings.src}/index`],

  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].css' }),
    new StyleLintPlugin({
      fix: true,
      syntax: 'scss',
      configFile: '.stylelintrc',
      context: settings.src,
      files: '**/*.scss'
    })
  ],

  devServer: {
    contentBase: settings.static,
    publicPath: settings.publicPath,
    historyApiFallback: true,
    host: settings.host,
    port: settings.port,
    https: settings.protocol === 'https'
  }
});
