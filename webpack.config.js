const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    modules: ['node_modules'],
    alias: {
      formatters: path.resolve(__dirname, './src/formatters'),
      assets: path.resolve('./src/assets'),
      components: path.resolve(__dirname, './src/components/'),
      services: path.resolve(__dirname, './src/services/'),
      'redux-persist': path.resolve(__dirname, './modules/redux-persist/'),
      utils: path.resolve(__dirname, './src/utils/'),
      src: path.resolve(__dirname, './src/'),
    },
  },
  entry: {
    hot: 'react-hot-loader/patch',
    app: path.resolve(__dirname, 'src/index.js'),
    sw: path.resolve(__dirname, 'src/sw.js'),
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js',
    globalObject: 'this',
  },
  target: 'web',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 2000,
    hot: true,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: ['file-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })),
      },
      {
        test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader',
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/octet-stream',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
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
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
    new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /^\.\/(en|ru|ua)$/),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{ from: 'src/assets', to: './' }]),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: true,
    }),
  ],

}
