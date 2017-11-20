const path = require('path')

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
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
}

module.exports = [
  config,
]
