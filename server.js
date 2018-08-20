const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const methodOverride = require('method-override')

const app = express()

const options = {
  dotfiles: 'ignore',
  etag: true,
  extensions: ['htm', 'html'],
  index: 'index.html',
  lastModified: true,
  maxAge: '1d',
  setHeaders(res, path, stat) {
    res.set('x-timestamp', Date.now())
    res.header('Cache-Control', 'public, max-age=1d')
  },
}

app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(methodOverride())

app.use('/', express.static(`${__dirname}/public`, options))
app.use('*', express.static(`${__dirname}/public`, options))
app.listen(8080, '0.0.0.0', () => console.log('Listening on port 8080!'))
