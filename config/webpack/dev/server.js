const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../server')

module.exports = merge(config, {
  mode: 'development',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
  ]

})
