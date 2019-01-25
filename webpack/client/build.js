import merge from 'webpack-merge'
import common from './common'
import Terser from 'terser-webpack-plugin'
import OptimizeCSSAssets from 'optimize-css-assets-webpack-plugin'

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  target: 'web',

  output: {
    filename: `[name].[chunkHash].js`,
  },

  optimization: {
    minimizer: [
      new Terser({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssets({}),
    ],
  },
})
