const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('../client')

module.exports = merge(config, {

  mode: 'production',

  /**
   * sets up chunk name with cache protection
   */
  output: {
    filename: `[name].[chunkHash].js`,
  },

  /**
   * TerserPlugin. A better minimizer that supports ES6
   */
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  plugins: [

    /**
     * Minifies all global css styles with cache protection
     */
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ]
})
