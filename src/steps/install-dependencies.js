const execa = require('execa');
const ora = require('ora');
const { join } = require('path');

async function execCommand({ cmd, cwd, suffixLog = '' }) {
  const promise = execa.command(cmd, { cwd });
  ora.promise(promise, `Running ${cmd} ${suffixLog}`)
  
  await promise;
}

async function installDependencies({ config: { manager }, execution: { libFolder }}) {
  const commands = [
    { cmd: `${manager} install`, cwd: libFolder },
    { cmd: `${manager} link`, cwd: libFolder },
    { cmd: `${manager} install`, cwd: join(libFolder, 'examples'), suffixLog: 'on examples' }
  ];

  for (command of commands) {
    await execCommand(command);
  }
  
  return {};
}

module.exports = installDependencies;
