const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const build = require('./build.js')
const merge = require('webpack-merge')

module.exports = merge(build, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
  },
  target: 'web',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
})
