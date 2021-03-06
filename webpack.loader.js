'use strict'

const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const outputDir = 'dist'

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      // This will cause the compiled CSS to be output to a
      // styles.css and a <link rel="stylesheet"> tag to be
      // appended to the index.html HEAD at compile time
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [ path.resolve(__dirname, 'node_modules/') ],
  },

  plugins: [
    new CleanWebpackPlugin(path.resolve(__dirname, 'dist')),
    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'source-map'
}

const mainConfig = merge({}, commonConfig, {
  entry: { main: path.resolve(__dirname, 'src/ui/index') },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'static', 'index.html'),
      chunks: ['main'],
    }),
    // Necessary to be able to use ExtractTextPlugin as a loader.
    new ExtractTextPlugin('ui.css'),
  ]
})

const adminConfig = merge({}, commonConfig, {
  entry: { admin: path.resolve(__dirname, 'src/admin/index') },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist', 'admin'),
    publicPath: '/admin'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'static', 'admin', 'index.html'),
      filename: 'index.html',
      chunks: ['admin'],
    }),
    // Necessary to be able to use ExtractTextPlugin as a loader.
    new ExtractTextPlugin('admin.css'),
  ]
})

module.exports = {
  main: mainConfig,
  admin: adminConfig,
}
