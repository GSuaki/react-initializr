const nodeExternals = require('webpack-node-externals');

module.exports = (__) => ({
  externals: [
    nodeExternals()
  ],
});
