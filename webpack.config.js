const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotEnv = require('dotenv-webpack')
const LoadablePlugin = require('@loadable/webpack-plugin')

const src = url => path.resolve(__dirname, `./src/${url}/`)

module.exports = {
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
          MiniCssExtractPlugin.loader,
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
    new CleanWebpackPlugin('public'),
    new LoadablePlugin({ writeToDisk: true }),
    new DotEnv({ safe: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{ from: src('assets'), to: './' }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}
