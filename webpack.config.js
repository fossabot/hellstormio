const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: {
    index: ['./src/ui/index']
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'awesome-typescript-loader'
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
    extensions: ['.tsx', '.ts', '.js']
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'static', 'index.html')
    }),
    // Necessary to be able to use ExtractTextPlugin as a loader.
    new ExtractTextPlugin('ui.css'),
  ]
}

module.exports = [
  config,
]
