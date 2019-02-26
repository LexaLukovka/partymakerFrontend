const merge = require('webpack-merge')
const config = require('../server')

module.exports = merge(config, {
  mode: 'production',
})
