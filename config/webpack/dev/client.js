const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../client')

module.exports = merge(config, {
  mode: 'development',

  entry: {
    client: [
      '@babel/polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './setup/client.js',
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
