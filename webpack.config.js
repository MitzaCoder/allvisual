const path = require('path');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
  },
  devServer: {
    publicPath: '/dist/',
    compress: true,
    port: 9000
  },
};