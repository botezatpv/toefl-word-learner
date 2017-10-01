const webpack = require('webpack');
require('./win_10_hack.js');
const path = require('path');
const { resolve } = require('path');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: () => options.postcssPlugins,
      context: __dirname
    }
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('development') }
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new ProgressBarPlugin({
    format: 'build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)' +
    ' (:total seconds) (:msg  )',
    clear: false
  })
];

module.exports = function() {
  return {
    devtool: 'eval-source-map',
    context: __dirname,
    entry: {
      main: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000/',
        'webpack/hot/only-dev-server',
        './index.js',
        'babel-polyfill'
      ]
    },
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'bundle.js'
    },
    plugins,
    devServer: {
      contentBase: './www',
      historyApiFallback: true,
      port: 3000,
      compress: false,
      inline: true,
      hot: true,
      stats: {
        assets: true,
        children: false,
        chunks: false,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
        colors: {
          green: '\u001b[32m'
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader',
          options: {
            limit: 100000,
            mimetype: 'application/font-woff'
          }
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader'
            }
          ]
        },
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'stylus-loader'
            }
          ]

        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [
            path.join(__dirname, 'node_modules'),
            path.resolve(__dirname, 'node_modules')
          ],
          options: {
            presets: ['es2015', 'stage-2', 'react'],
            plugins: ['react-hot-loader/babel', 'transform-runtime', 'transform-es2015-for-of', 'transform-decorators-legacy']
          }
        }
      ]}
  };
};
