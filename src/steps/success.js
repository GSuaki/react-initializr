const chalk = require('chalk');
const { join } = require('path');

function onCreateSuccess(context) {
  const { config, execution: { libFolder, package } } = context;

  console.log(`
  Your module has been created at ${libFolder}.

  To get started, in one tab, run:
  $ ${chalk.cyan(`cd ${package} && ${config.manager} start`)}

  And in another tab, run the create-react-app dev server:
  $ ${chalk.cyan(`cd ${join(package, 'examples')} && ${config.manager} start`)}
  `);

  return context;
}

module.exports = onCreateSuccess;
