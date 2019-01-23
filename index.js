require('@babel/register')

require('@babel/polyfill')
require('./src/server')

const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const path = require('path')
const webpack = require('webpack')
const webpackDevConfig = require('./webpack/dev')
const server = require('./src/server')
const app = express()

const compiler = webpack(webpackDevConfig)

app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackDevConfig.output.publicPath,
  contentBase: 'src',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  },
}))

app.use(webpackHotMiddleware(compiler))

app.use(express.static(path.resolve(__dirname, './dist')))

app.use(server.default)

app.listen(3000)
