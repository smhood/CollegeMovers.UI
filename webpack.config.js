const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    modules: [path.resolve('./lib'), path.resolve('./node_modules')]
  },
  entry: {
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom'
    ],
    app: ['./lib/components/Index.js']
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'env', 'stage-2']
        }
      }
    },
    {
      test:/\.(s*)css$/,
      use:['style-loader','css-loader', 'sass-loader']
    },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
};