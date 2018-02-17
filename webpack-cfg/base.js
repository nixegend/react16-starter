const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (settings, env) => {
  const stylesLoaders = [
    {
      loader: 'css-loader',
      options: { minimize: env === 'production' },
    },
    'postcss-loader',
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          `${settings.srcFolder}/common/styles/variables.scss`,
        ],
      },
    },
  ];

  return {
    resolve: {
      extensions: ['.js'],
      modules: [settings.srcFolder, 'node_modules'],
    },

    output: {
      path: settings.distFolder,
      publicPath: '/',
      filename: 'bundle.js',
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          include: settings.srcFolder,
          use: (env === 'development') ? ['babel-loader', 'eslint-loader'] : ['babel-loader'],
        },
        {
          test: /\.(css|scss)$/,
          loader: env === 'production'
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
