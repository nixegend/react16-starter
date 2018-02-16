const { resolve } = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const appSettings = require('../app-settings');

const stylesLoaders = [
  {
    loader: 'css-loader',
    options: { minimize: production },
  },
  'postcss-loader',
  'sass-loader',
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.join(__dirname, 'src/styles/colors.scss'),
        path.join(__dirname, 'src/styles/variables.scss'),
        path.join(__dirname, 'src/styles/mixins.scss'),
      ],
    },
  },
];

module.exports = {
  resolve: {
    extensions: ['.js'],
    modules: [resolve(__dirname, appSettings.src), 'node_modules'],
  },

  output: {
    path: resolve(__dirname, `${appSettings.static}${appSettings.urlBasePath}`),
    publicPath: appSettings.urlBasePath,
    filename: 'app.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, appSettings.src),
        use: (process.env.NODE_ENV === 'development') ? ['babel-loader', 'eslint-loader'] : ['babel-loader'],
      },

      {
        test: /\.(css|scss)$/,
        loader: production
          ? ExtractTextPlugin.extract({ fallback: 'style-loader', use: stylesLoaders })
          : ['style-loader', ...stylesLoaders],
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
