const webpack = require("webpack");
const path = require("path");
const DashboardPlugin = require("webpack-dashboard/plugin");

let config = {
    mode:'development',
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "./public"),
      filename: "./bundle.js"
    },
    plugins:[new DashboardPlugin()],
    module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        ]
      },
        
      devServer: {
        contentBase: path.resolve(__dirname, "./public"),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true
      },
      devtool: "eval-source-map"
  }

module.exports = config;
