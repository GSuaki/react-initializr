const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (__) => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
});
