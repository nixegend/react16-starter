const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = settings => ({
  entry: [`${settings.src}/index`],
  mode: 'production',

  optimization: {
    minimize: false
  },

  output: {
    path: settings.dist,
    publicPath: settings.publicPath,
    filename: 'bundle.[contenthash].js'
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: 'styles.[contenthash].css' })
  ]
});
