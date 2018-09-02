const path = require('path')
const common = require('./webpack.common.js')
const merge = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, 'src/index.js'),
    sw: path.resolve(__dirname, 'src/sw.js'),
  },
  target: 'web',
})
