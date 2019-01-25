import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './common'
import Terser from 'terser-webpack-plugin'
import OptimizeCSSAssets from 'optimize-css-assets-webpack-plugin'
import root from '../../helpers/root'

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',
  entry: {
    app: root('src/client.js'),
  },
  output: {
    filename: `[name].[chunkHash].js`,
  },

  optimization: {
    minimizer: [
      new Terser({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssets({}),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ]
})
