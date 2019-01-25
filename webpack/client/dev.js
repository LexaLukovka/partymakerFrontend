import webpack from 'webpack'
import merge from 'webpack-merge'
import common from './common'

export default merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
