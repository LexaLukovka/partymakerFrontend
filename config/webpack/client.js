const path = require('path')
const merge = require('webpack-merge')
const config = require('../../webpack.config')
const Copy = require('copy-webpack-plugin')
const Clean = require('clean-webpack-plugin')
const Loadable = require('@loadable/webpack-plugin')

/**
 * Client specific config
 * client dev and prod configs extend this one
 */

module.exports = merge(config, {
  name: 'client',
  target: 'web',
  entry: {
    client: [
      '@babel/polyfill',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './setup/client.js',
    ],
  },

  /**
   * Don't know why it's here.
   * It's better to stay here. Not broken don't fix it
   */

  optimization: {
    namedModules: true,
    namedChunks: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },

  /**
   * Places build files into the public folder.
   * And adds hash to protect from caching new assets
   */

  output: {
    path: path.resolve(__dirname, '../../build/public'),
    publicPath: '/',
    filename: `[name].[hash:3].js`,
  },

  plugins: [
    /**
     * Cleans up everything before placing new build
     */
    new Clean('./public', {
      root: path.resolve(__dirname, '../../build'),
    }),

    /**
     * Places loadable stats to public folder. So it would know what chunks to use
     */
    new Loadable({ writeToDisk: true }),

    /**
     * Just copies all static files from assets to public folder
     */
    new Copy([{ from: './src/assets', to: './' }]),
  ]
})
