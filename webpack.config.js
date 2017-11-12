const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "webpack-hot-middleware/client",
    path.join(__dirname, "src/app/client.jsx")
  ],
  output: {
    path: path.join(__dirname, "dist/public"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
