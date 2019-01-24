require('dotenv').config()
require('@babel/register')
require('@babel/polyfill')

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const buildConfig = require('./webpack.config').build
const analyzeConfig = require('./webpack.config').analyze

const server = require('./src/server')
const app = express()
const { PORT } = process.env
const { log } = console

const root = (url) => path.resolve(__dirname, url)

const isAnalyze = process.argv.includes('--analyze')
const compiler = webpack(isAnalyze ? analyzeConfig : buildConfig)

compiler.run((err, stats) =>
  log(err || stats.toString({
    colors: true,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: false,
  })))

app.use(express.static(root('./public')))
app.use(server.default)

app.listen(PORT, () => log(`
 \n--------------------------------------\n
| Listening on http://localhost:${PORT} |
  \n--------------------------------------\n
`))
