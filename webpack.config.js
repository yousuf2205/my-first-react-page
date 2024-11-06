const path = require('path');
const { cache } = require('webpack');

module.exports = {
  cache: false,
  mode: 'development', // Set mode to development
  entry: './src/index.js', // Ensure this path is correct
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: path.join(__dirname, 'public'), // Serve files from public folder
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel to transpile JS files
        },
      },
      {
        test: /\.html$/, // Load HTML files
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Load image files
        type: 'asset/resource', // Treat images as separate files and emit them
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve file extensions
  },
};
