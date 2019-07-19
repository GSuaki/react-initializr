#!/usr/bin/env node
'use strict'

const path = require('path');
const chalk = require('chalk');
const cli = require('commander');

const defaults = require('./defaults');
const { chain } = require('./steps');

class Initializr {

  constructor() {
    cli
      .name('react-initializr')
      .usage('[options] [package-name]')
      .option('-v, --version <string>', 'version', defaults.version)
      .option('-d, --desc <string>', 'description')
      .option('-a, --author <string>', 'author', defaults.author)
      .option('-l, --license <string>', 'license', defaults.license)
      .option('-m, --manager <npm|yarn>', 'dependence manager', /^(npm|yarn)$/, defaults.manager)
      .parse(process.argv);
    
    if (cli.args.length > 1) {
      console.error(chalk.red('Invalid arguments... \n'));
      cli.help();
      process.exit(1);
    }

    return this.run({
      version: cli.version,
      description: cli.desc,
      author: cli.author,
      license: cli.license,
      manager: cli.manager,
      packageName: cli.args[0] || defaults.packageName
    });
  }

  async run(inlineArgs) {
    return await chain({ config: inlineArgs })
  }
}

module.exports = Initializr;
