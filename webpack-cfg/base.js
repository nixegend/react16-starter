const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const appSettings = require('../app-settings');

const stylesLoaders = [
  {
    loader: 'css-loader',
    options: { minimize: process.env.NODE_ENV === 'production' },
  },
  'postcss-loader',
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        resolve(__dirname, `${appSettings.srcFolder}/common/styles/variables.scss`),
      ],
    },
  },
];

module.exports = {
  resolve: {
    extensions: ['.js'],
    modules: [resolve(__dirname, appSettings.srcFolder), 'node_modules'],
  },

  output: {
    path: resolve(__dirname, `..${appSettings.distFolder}`),
    publicPath: appSettings.publicPath,
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, appSettings.srcFolder),
        use: (process.env.NODE_ENV === 'development') ? ['babel-loader', 'eslint-loader'] : ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        loader: process.env.NODE_ENV === 'production'
          ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: stylesLoaders })
          : ['style-loader', ...stylesLoaders],
      },
      {
        test: /\.(png|jpeg|jpg|gif|woff|woff2|eot|ttf|svg|ico|otf)(\?.*$|$)/,
        use: ['file-loader'],
      },
      {
        test: /\.(json)(\?.+)?$/,
        use: ['url-loader'],
      },
    ],
  },
};
