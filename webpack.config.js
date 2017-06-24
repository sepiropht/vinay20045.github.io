var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js"
  },

  devtool: "inline-source-map",

  output: {
    path: "/dist",
    filename: "[name].bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management"
    })
  ]
};
