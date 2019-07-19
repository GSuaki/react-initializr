const path = require('path');

const entryPoint = require('./webpack/entry');
const externals = require('./webpack/externals');
const modules = require('./webpack/module');
const output = require('./webpack/output');
const otimization = require('./webpack/otimization');
const plugins = require('./webpack/plugins');

const config = {
  ...entryPoint({ pattern: path.resolve('./src') }),
  ...externals(),
  ...modules(),
  ...output({ path: path.resolve(__dirname, './dist') }),
  ...plugins(),
  ...otimization(),
};

module.exports = config;
