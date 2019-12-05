const path = require('path')

const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const base = require('./webpack.config.base')

module.exports = merge(base, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.css',
      chunkFilename: '[id].bundle.css',
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    historyApiFallback: true,
    port: 3000,
  },
})
