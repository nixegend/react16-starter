const baseConfig = require('./base');
const webpack = require('webpack');

const stageConfig = Object.assign({}, {
  entry: {
    app: ['./src/index'],
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
}, baseConfig);

module.exports = stageConfig;
