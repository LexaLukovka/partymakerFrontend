import merge from 'webpack-merge'
import build from './build'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default merge(build, {
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
})
