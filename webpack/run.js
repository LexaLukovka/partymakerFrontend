import webpack from 'webpack'
import wdm from 'webpack-dev-middleware'
import whm from 'webpack-hot-middleware'
import { common, build, dev, analyze } from './client'

const config = (mode) => {
  switch (mode) {
    case 'production':
      return build

    case 'analyze':
      return analyze

    default:
      return dev
  }
}

export default (app, mode) => {
  const compiler = webpack(config(mode))

  compiler.outputFileSystem = require('fs')

  if (mode === 'development') {
    app.use(wdm(compiler, common.devServer))
    app.use(whm(compiler))
  } else {
    compiler.run((err, stats) => {
      console.log(err || stats.toString(common.devServer.stats))
    })
  }
}
