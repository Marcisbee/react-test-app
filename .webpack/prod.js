const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const stylusLoader = ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader");

const resolve = _path => path.resolve(__dirname, _path);

module.exports = {
  mode: "production",
  devtool: "sourcemap",
  entry: [
    resolve("../index.html"),
    resolve("../index.js"),
  ],
  watch: false,
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: resolve("../lib")
  },
  module: {
    rules: [
      {
        test: /\.radi/,
        use: [
          {
            loader: 'radi-loader',
            options: {/* ... */}
          }
        ]
      },
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
          // fallback to style-loader in development
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      // {
      //   test: /\.styl$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: { sourceMap: true },
      //     },
      //     {
      //       loader: 'stylus-loader',
      //       options: { sourceMap: true },
      //     }
      //   ]
      // },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: "file-loader"
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html',
      favicon: './assets/img/favicon.png'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
};
