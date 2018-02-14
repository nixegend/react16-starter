const webpack = require('webpack');
const baseConfig = require('./base');

const resultConfig = Object.assign({}, {
  entry: ['./src/index'],

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],

}, baseConfig);

module.exports = resultConfig;
