const path = require('path')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: [path.resolve(__dirname, 'src', 'index.js')],
  },
  mode: process.env.APP_ENV,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]__[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'link:href'],
          },
        },
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname), path.join(__dirname, 'node_modules')],
    extensions: ['.js', '.css'],
    alias: {
      _atoms: path.resolve(__dirname, 'src', 'components', 'atoms'),
      _molecules: path.resolve(__dirname, 'src', 'components', 'molecules'),
      _organisms: path.resolve(__dirname, 'src', 'components', 'organisms'),
      _images: path.resolve(__dirname, 'src', 'assets', 'images'),
      _pages: path.resolve(__dirname, 'src', 'components', 'pages'),
      _styles: path.resolve(__dirname, 'src', 'styles'),
      _utils: path.resolve(__dirname, 'src', 'utils'),
      _services: path.resolve(__dirname, 'src', 'services'),
    },
  },
}
