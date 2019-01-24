const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',

  output: {
    filename: `[name].[chunkHash].js`,
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
})
