const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const resolve = _path => path.resolve(__dirname, _path);

module.exports = {
  mode: "production",
  devtool: "sourcemap",
  entry: [
    resolve("../index.html"),
    resolve("../index.js"),
  ],
  watch: true,
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: resolve("../lib")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
