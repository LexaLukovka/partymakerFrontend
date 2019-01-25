require('dotenv').config()
require('@babel/register')
require('@babel/polyfill')

const express = require('express')
const runWebpack = require('./webpack/run').default
const server = require('./src/server').default
const path = require('path')
const minifyHTML = require('express-minify-html')

const app = express()
const { PORT } = process.env

const start = async () => {
  const mode = (options) => {
    if (options.includes('--analyze')) return 'analyze'
    if (options.includes('--production')) return 'production'
  }

  app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
      removeComments: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes: true,
      minifyJS: true
    }
  }))

  runWebpack(app, mode(process.argv))

  app.use(express.static(path.resolve(__dirname, './public')))

  app.use(server)

  app.listen(PORT, () => console.log(`
 \n--------------------------------------\n
| Listening on http://localhost:${PORT} |
  \n--------------------------------------\n
`))
}

start()
