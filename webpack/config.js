const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DotEnv = require('dotenv-webpack')

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      assets: path.resolve('../src/assets'),
      components: path.resolve(__dirname, '../src/components/'),
      services: path.resolve(__dirname, '../src/services/'),
      styles: path.resolve(__dirname, '../src/styles/'),
      utils: path.resolve(__dirname, '../src/utils/'),
      src: path.resolve(__dirname, '../src/'),
    },
  },
  entry: {
    app: path.resolve(__dirname, '../src/client.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
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
    new DotEnv({ safe: true }),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{ from: path.resolve(__dirname, '../src/'), to: './' }]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
}
