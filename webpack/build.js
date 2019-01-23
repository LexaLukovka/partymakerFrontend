const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const common = require('./config.js')

module.exports = (env, argv) => merge(common(env, argv), {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',

  output: {
    filename: '[name].js',
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
