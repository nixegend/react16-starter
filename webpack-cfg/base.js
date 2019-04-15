const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const envConfig = require('../env.config');

module.exports = settings => ({
  resolve: {
    extensions: ['.js'],
    modules: [settings.src, 'node_modules'],
    alias: {
      '@constants': `${settings.src}/common/constants`,
      '@modules': `${settings.src}/common/modules`,
      '@utils': `${settings.src}/common/utils`,
      'react-dom': '@hot-loader/react-dom'
    }
  },

  output: {
    path: settings.dist,
    publicPath: settings.publicPath,
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: settings.src,
        exclude: /node_modules/,
        use: settings.isProd
          ? ['babel-loader']
          : ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !settings.isProd
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                `${settings.src}/common/styles/variables.scss`,
                `${settings.src}/common/styles/mixins.scss`
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|woff|woff2|eot|ttf|svg|ico|otf)(\?.*$|$)/,
        use: ['file-loader']
      },
      {
        test: /\.(json)(\?.+)?$/,
        use: ['url-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      favicon: `${settings.static}/favicon.ico`,
      template: `${settings.src}/template.html`
    }),
    new webpack.DefinePlugin({
      GLOBAL_SETTINGS: JSON.stringify(envConfig(settings)),
      GLOBAL_VM_TYPE: JSON.stringify(settings.vmType),
      'process.env.NODE_ENV': JSON.stringify(settings.env)
    })
  ]
});
