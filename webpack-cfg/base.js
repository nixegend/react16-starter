const { resolve } = require('path');
const config = require('../config');

module.exports = {
  resolve: {
    extensions: ['.js'],
    modules: [resolve(__dirname, config.src), 'node_modules'],
  },

  output: {
    path: resolve(__dirname, `${config.static}${config.urlBasePath}`),
    publicPath: config.urlBasePath,
    filename: 'app.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, config.src),
        use: (process.env.NODE_ENV === 'development') ? ['babel-loader', 'eslint-loader'] : ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|jpg|gif|eot|ttf|svg|woff|woff2)(\?.+)?$/,
        use: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
      {
        test: /\.(json)(\?.+)?$/,
        use: ['url-loader?name=[path][name].[ext]?[hash]'],
      },
    ],
  },
};
