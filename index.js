require('@babel/register')({
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  'plugins': [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    '@babel/plugin-proposal-class-properties',
    'react-hot-loader/babel',
  ],
})
require('@babel/polyfill')
require('./src/server')

const express = require('express')
const path = require('path')
const webpack = require('webpack')
const webpackDevConfig = require('./webpack/dev')
const server = require('./src/server')
const app = express()

const compiler = webpack(webpackDevConfig, {
  noInfo: true,
  publicPath: webpackDevConfig.output.publicPath,
})

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true, publicPath: webpackDevConfig.output.publicPath,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.use(express.static(path.resolve(__dirname, './dist')))

app.use(server)

app.listen(3000)
