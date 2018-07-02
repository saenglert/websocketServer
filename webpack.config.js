const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader']
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: ['source-map-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  devtool: "source-map"
};