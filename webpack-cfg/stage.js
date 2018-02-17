const baseConfig = require('./base');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const stageConfig = Object.assign({}, {
  entry: {
    app: ['./src/index'],
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.NoErrorsPlugin(),
  ],
}, baseConfig);

module.exports = stageConfig;
