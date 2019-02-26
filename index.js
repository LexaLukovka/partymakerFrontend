require('module-alias/register')
require('@babel/register')
require('@babel/polyfill')
const { config } = require('dotenv')

const path = require('path')
const express = require('express')

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')
const universalConfig = require('./config/webpack/universal.js')
const setup = require('./config/setup')

const app = express()

config()

const isProduction = process.argv.includes('--production')

process.env.NODE_ENV = isProduction ? 'production' : 'development'

if (!process.argv.includes('--production')) {
  runDevelopment()
} else {
  runProduction()
}

app.listen(process.env.PORT, () => console.log(`
 \n--------------------------------------\n
| Listening on http://localhost:${process.env.PORT} |
  \n--------------------------------------\n
`))

function runProduction() {
  /**
   * Steps to run production build
   */

  const client = path.resolve(__dirname, '../build')
  const serverPath = path.resolve(__dirname, './build/server.js')
  const serverRenderer = require(serverPath).default
  app.use(express.static(client))
  app.use(serverRenderer())
}

function runDevelopment() {
  /**
   * Steps to run development build
   */

  const compiler = webpack(universalConfig)
  const clientCompiler = compiler.compilers.find(compiler => compiler.name === 'client')
  app.use(webpackDevMiddleware(compiler, setup.webpackDevMiddleware))
  app.use(webpackHotMiddleware(clientCompiler, setup.webpackHotMiddleware))
  app.use(webpackHotServerMiddleware(compiler, setup.webpackHotServerMiddleware))
}
