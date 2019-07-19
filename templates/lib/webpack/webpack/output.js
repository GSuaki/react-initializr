
module.exports = ({ path }) => ({
  output: {
    path,
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
});
