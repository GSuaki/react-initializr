const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const modules = {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/react'],
      },
    },
    {
      test: /\.s?css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    },
  ],
}

module.exports = (__) => ({
  module: modules,
});
