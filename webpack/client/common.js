import Css from 'mini-css-extract-plugin'
import Clean from 'clean-webpack-plugin'
import Loadable from '@loadable/webpack-plugin'
import Env from 'dotenv-webpack'
import webpack from 'webpack'
import Copy from 'copy-webpack-plugin'
import src from '../../helpers/src'
import root from '../../helpers/root'

export default {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      src: src(''),
    },
  },

  context: root(''),

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

  devServer: {
    publicPath: '/',
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

  performance: {
    maxEntrypointSize: 500000,
    hints: false,
  },

  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
      root('src/client.js'),
    ],
  },
  output: {
    path: root('public'),
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
    new Copy([{ from: src('assets'), to: root('./public') }]),
    new Css({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}
