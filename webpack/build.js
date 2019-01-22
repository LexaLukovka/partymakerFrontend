/* eslint-disable import/no-extraneous-dependencies */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./config.js')

module.exports = (env, argv) => merge(common(env, argv), {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    sw: path.resolve(__dirname, 'src/sw.js'),
  },
  target: 'web',

  output: {
    filename: '[name].[contenthash].js',
  },

  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
      'process.env.APP_DOMAIN': '"rely.powercode.pro"',
      'process.env.BACKEND_URL': '"https://rely.powercode.pro"',
      'process.env.SOCKETS_URL': '"https://rely.powercode.pro:7777"',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
})
