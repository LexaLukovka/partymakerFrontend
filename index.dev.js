require('dotenv').config()
require('@babel/register')
require('@babel/polyfill')

const path = require('path')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpack = require('webpack')
const config = require('./webpack.config').dev
const server = require('./src/server')
const app = express()
const { PORT } = process.env
const { log } = console

const root = (url) => path.resolve(__dirname, url)

const compiler = webpack(config)

compiler.outputFileSystem = require('fs')

app.use(webpackDevMiddleware(compiler, config.devServer))

app.use(webpackHotMiddleware(compiler))
app.use(express.static(root('./public')))
app.use(server.default)

app.listen(PORT, () => log(`Listening on http://localhost:${PORT}`))
