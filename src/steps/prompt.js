'use strict'
const { basename } = require('path');
const inquirer = require('inquirer');
const validateNpmName = require('validate-npm-package-name');
const defaults = require('../defaults');

const askPackageName = () => {
  const folder = basename(process.cwd());
  const validFolder = validateNpmName(folder).validForNewPackages;
  return {
    type: 'input',
    name: 'name',
    message: 'package name:',
    validate: name => {
      return name && validateNpmName(name).validForNewPackages
    },
    default: validFolder ? folder : '',
  };
}

const askVersion = () => {
  const def = '1.0.0';
  return {
    type: 'input',
    name: 'version',
    message: 'version:',
    default: def,
  };
}

const askDescription = () => {
  return {
    type: 'input',
    name: 'description',
    message: 'description: ',
    default: '',
  };
}

const askAuthor = () => {
  return {
    type: 'input',
    name: 'author',
    message: 'author: ',
    default: '',
  };
}

const askLicense = () => {
  const def = 'ISC';
  return {
    type: 'input',
    name: 'license',
    message: 'license:',
    default: def,
  };
}

const askManager = () => {
  const def = 'npm';
  return {
    type: 'list',
    name: 'manager',
    message: 'dependence manager:',
    choices: [ def, 'yarn' ],
    default: def,
  };
}

const prepareQuestions = ({ author, description, license, manager, packageName, version }) => {
  const questions = [];

  if (packageName === defaults.packageName) questions.push(askPackageName());
  if (version === defaults.version) questions.push(askVersion());
  if (description === defaults.description) questions.push(askDescription());
  if (author === defaults.author) questions.push(askAuthor());
  if (license === defaults.license) questions.push(askLicense());
  if (manager === defaults.manager) questions.push(askManager());

  return questions;
}

async function prompt(context) {
  const { config } = context;

  const questions = prepareQuestions(config);
  
  const result = questions.length == 0 ? config : {
    ...config,
    ...await inquirer.prompt(questions),
  };

  /** Just a breakline from prompt log */
  console.log('\n');
  return { config: result };
};

module.exports = prompt;
