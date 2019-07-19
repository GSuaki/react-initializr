const chalk = require('chalk');

function intro(context) {
  const name = `${chalk.gray('react-lib')}-${chalk.yellow('initializr')}`
  const subtitle = chalk.gray('Bootstrap your library')

  console.log(`
  ############################
  #  ${name}    #
  #  ${subtitle}  #
  ############################

  This utility will walk you through creating a React library.
  It only covers the most common items, and tries to guess sensible defaults.
  
  Press ^C at any time to quit.
  `)

  return context;
}

module.exports = intro;
