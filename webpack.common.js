const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  entry: {
    'main': './app/app.js',
    'vendor': './app/vendor.js',
    'polyfill': './app/polyfill.js'
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico|webp)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      { test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['main','vendor','polyfill','manifest']
    }),
    new HtmlWebpackPlugin({
      template: 'app/template/index.html'
    })
  ]
};
