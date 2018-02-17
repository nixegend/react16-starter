const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = (settings) => ({
  entry: [`${settings.srcFolder}/index`],

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
  ],
});
