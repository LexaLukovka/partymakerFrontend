const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../client')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(config, {
  mode: 'development',

  devtool: 'cheap-module-eval-source-map',

  entry: {
    client: [
      '@babel/polyfill',
      './setup/client.js',
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, '../../../build/public'),
    compress: true,
    port: 2000,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Invoice CRM',
      filename: path.resolve(__dirname, '../../../build/public/index.html'),
      template: path.resolve(__dirname, '../../../setup/index.ejs'),
      inject: false,
      hash: true
    })
  ]
})
