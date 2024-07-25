const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js', // Adjust this path to your entry file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert/"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "util": require.resolve("util/")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
