// Webpack configuration
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const isProd = process.env.NODE_ENV === 'production'; // true or false
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: ['css-loader', 'sass-loader'],
  publicPath: '/build',
});
const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  devtool: 'source-map',
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.sass$/,
      use: cssConfig,
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /\.(jpe?g|svg|png|gif)$/i,
      use:
      [
        'file-loader?name=[name].[ext]&outputPath=img/',
                        //'image-webpack-loader'
      ],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
    }),
    new ExtractTextPlugin({
      filename: 'css/index.css',
      disable: !isProd,
      allChunks: true,
      loader: 'css?sourceMap!sass?sourceMap',
    }),
        // enable HMR globally
    new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
};
