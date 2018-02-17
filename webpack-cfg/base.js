const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (settings) => {
  const stylesLoaders = [
    {
      loader: 'css-loader',
      options: { minimize: settings.env === 'production' },
    },
    'postcss-loader',
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          `${settings.src}/common/styles/variables.scss`,
        ],
      },
    },
  ];

  return {
    resolve: {
      extensions: ['.js'],
      modules: [settings.src, 'node_modules'],
    },

    output: {
      path: settings.dist,
      publicPath: '/',
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          include: settings.src,
          use: (settings.env === 'development') ? ['babel-loader', 'eslint-loader'] : ['babel-loader'],
        },
        {
          test: /\.(css|scss)$/,
          loader: settings.env === 'production'
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
};
