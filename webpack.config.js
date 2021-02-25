const path = require("path");

module.exports = {
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    filename: "ptg-library.js",
    path: path.resolve(__dirname, "dist"),
    library:'ptg',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: "production",
}