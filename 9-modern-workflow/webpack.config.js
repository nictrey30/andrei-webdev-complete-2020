const path = require('path');
module.exports = {
  entry: './src/index.js', // the relative path to where our js file is
  output: {
    path: path.resolve(__dirname, 'dist/assets'), // absolute path, describes where the file is located relative to the root of my pc, we don't say the file name at the end
    filename: 'bundle.js'
  },
  devServer: {
    // absolute path that will tell webpack where the directory is that we want to serve to the browser
    contentBase: path.resolve(__dirname, 'dist'),
    // public path property - tells webpack where the actual assets are being served up from
    publicPath: '/assets/',
    port: 2000
  },
  module: {
    rules: [
      {
        // test - describes which files we want to run through our loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
// console.log(__dirname); // gives the absolute url of the project folder
