const intro = require('./intro');
const prompt = require('./prompt');
const createFolder = require('./create-folder');
const copyTemplate = require('./copy-template');
const installDependencies = require('./install-dependencies');
const success = require('./success');

const steps = [
  intro,
  prompt, 
  createFolder,
  copyTemplate,
  installDependencies,
  success,
];

exports = module.exports = steps;

exports.chain = async context => {
  let _context = { ...context };

  for (const step of steps) {
    _context = { ..._context, ...await step(_context) };
  }

  return _context;
}
