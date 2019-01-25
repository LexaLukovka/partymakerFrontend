import webpack from 'webpack'
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

export default (app, mode = 'development') => {
  return new Promise((resolve, reject) => {
    const webpackConfig = config(mode)
    const compiler = webpack(webpackConfig)

    if (mode === 'development') {
      app.use(require('webpack-dev-middleware')(compiler, common.devServer))
      app.use(require('webpack-hot-middleware')(compiler))
    } else {
      compiler.run((err, stats) => {
        if (err) reject(err)
        const statistics = stats.toString(common.devServer.stats)
        console.log(statistics)
        resolve(statistics)
      })
    }
  })
}
