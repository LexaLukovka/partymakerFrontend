const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../client')

module.exports = merge(config, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
