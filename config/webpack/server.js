const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('../../webpack.config')

module.exports = merge(config, {

  /**
   * Name and mode is required for webpack to determine which mode to use
   */

  name: 'server',
  target: 'node',

  entry: './setup/server',

  output: {
    path: path.resolve(__dirname, '../../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  /**
   * LimitChunkCountPlugin is required.
   * Without it dynamic imports would also split server build
   */

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
})
