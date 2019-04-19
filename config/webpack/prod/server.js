const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../server')

module.exports = merge(config, {
  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ]
})
