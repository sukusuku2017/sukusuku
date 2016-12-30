const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-eval-source-map',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[id].chunk.js'
  },

  module: {
    rules: [
      { test: /\.css$/, exclude: /node_modules/, loader: 'style-loader!css-loader' }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: '[name].css', disable: false, allChunks: true
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'data')],
    compress: true,
    port: 8080
  }
});
