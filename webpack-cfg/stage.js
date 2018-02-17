const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = (settings) => ({
  entry: [`${settings.src}/index`],

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
  ],
});
