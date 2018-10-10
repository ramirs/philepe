
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ["./require.js", "./src/app.js", "./philepe.js"],
  mode: "development",
  output: {
    filename: "./bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/app.css',
        to: './app.css'
      }
    ])
  ]
}
