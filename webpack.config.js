import path from 'path'
import webpack from 'webpack'
import merge from 'webpack-merge'
import Clean from 'clean-webpack-plugin'
import Copy from 'copy-webpack-plugin'
import Css from 'mini-css-extract-plugin'
import Env from 'dotenv-webpack'
import Loadable from '@loadable/webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import Terser from 'terser-webpack-plugin'
import OptimizeCSSAssets from 'optimize-css-assets-webpack-plugin'

const src = url => path.resolve(__dirname, `./src/${url}/`)

export const common = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      assets: src('assets'),
      components: src('components'),
      services: src('services'),
      styles: src('styles'),
      utils: src('utils'),
      src: src('src'),
    },
  },

  optimization: {
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

  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },

  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      './src/client.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: `[name].[hash:3].js`,
  },
  target: 'web',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          Css.loader,
          'css-loader',
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'react-icon-loader',
            options: {
              limit: 10000,
              mimetype: 'image/svg+xml',
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name() {
                return '[path][name].[ext]'
              },
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new Clean('public'),
    new Loadable({ writeToDisk: true }),
    new Env({ safe: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new Copy([{ from: src('assets'), to: './' }]),
    new Css({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}

export const dev = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    publicPath: common.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})

export const build = merge(common, {
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

export const analyze = merge(build, {
  devtool: 'source-map',
  target: 'web',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
})

export default common
