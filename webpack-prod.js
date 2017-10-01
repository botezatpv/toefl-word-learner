const webpack = require('webpack');
require('./win_10_hack.js');
const path = require('path');
const { resolve } = require('path');
const chalk = require('chalk');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const plugins = [
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: () => options.postcssPlugins,
      context: __dirname,
      minimize: true,
      debug: false
    }
  }),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') }
  }),
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new ProgressBarPlugin({
    format: 'build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)' +
    ' (:total seconds) (:msg  )',
    clear: false
  }),
  new webpack.optimize.UglifyJsPlugin({
    beautify: false,
    mangle: {
      screw_ie8: true,
      keep_fnames: true
    },
    compress: {
      screw_ie8: true
    },
    comments: false
  })
];

module.exports = function() {
  return {
    context: __dirname,
    entry: {
      main: [
        './index.js',
        'babel-polyfill'
      ]
    },
    output: {
      path: path.join(__dirname, 'www'),
      filename: 'bundle.js'
    },
    plugins,
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
