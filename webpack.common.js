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
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, include: /app/, loader: 'style-loader!css-loader' }
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
