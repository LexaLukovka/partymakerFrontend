require('dotenv').config()
require('@babel/register')
require('@babel/polyfill')

const express = require('express')
const runWebpack = require('./webpack/run')
const server = require('./src/server')
const root = require('./helpers/root')

const app = express()
const { PORT } = process.env

const modes = (options) => {
  if (options.includes('--analyze')) return 'analyze'
  if (options.includes('---production')) return 'production'
}

runWebpack.default(app, modes(process.argv))

app.use(express.static(root.default('./public')))

app.use(server.default)

app.listen(PORT, () => console.log(`
 \n--------------------------------------\n
| Listening on http://localhost:${PORT} |
  \n--------------------------------------\n
`))
