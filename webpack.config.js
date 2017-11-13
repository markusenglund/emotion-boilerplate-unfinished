const path = require("path");

module.exports = {
  entry: path.join(__dirname, "src/client.jsx"),
  output: {
    path: path.join(__dirname, "dist/public"),
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
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
