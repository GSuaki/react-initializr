const { readdirSync, existsSync } = require('fs');
const glob = require('glob');
const path = require('path');

function readFiles(src) {
  const entries = {};

  readdirSync(src)
    .filter((name) => name != '__tests__')
    .forEach((moduleName) => {
      const index = `./src/${moduleName}/index.js`;
      
      if (existsSync(index) && moduleName !== 'all') {
        entries[`${moduleName}/index`] = index;
      }
    });

  return entries;
}

function getEntries(pattern) {
  const entries = {};

  glob
    .sync(pattern, { ignore: ['src/__tests__/**', '**/stories/**'] })
    .forEach((file) => {
      entries[file.replace('src/', '')] = path.join(__dirname, '../', file);
    });

  return entries;
}

module.exports = ({ pattern }) => ({
  entry: readFiles(pattern),
});
