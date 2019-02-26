
/**
 * Universal webpack config for both client and server
 */

module.exports = [

  /**
   * Webpack development config for client
   */
  require('./dev/client'),

  /**
   * Webpack development config for node server
   */
  require('./dev/server')
]
