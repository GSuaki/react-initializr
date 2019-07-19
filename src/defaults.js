const gitUsername = require('git-user-name');
const { basename } = require('path');

module.exports = {
  author: gitUsername(),
  manager: 'npm',
  license: 'ISC',
  version: '1.0.0',
  packageName: basename(process.cwd()),
};
