const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const build = require('./webpack.build.js')
const merge = require('webpack-merge')

module.exports = merge(build, {
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
})
