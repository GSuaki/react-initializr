const { existsSync } = require('fs');
const mkdirp = require('make-dir');
const ora = require('ora');
const { join } = require('path');

async function createFolder(path) {
  if (existsSync(path)) {
    throw new Error(`Folder already exists: ${path}`);
  } else {
    await mkdirp(path);
  }
}

function normalizedPackage(packageName) {
  if (packageName.indexOf('/') === -1) return { package: packageName };
  const [ scope, package ] = packageName.split('/')
  return { scope, package };
}

async function createLibFolder({ config }) {
  const { packageName } = config;
  const { scope, package }  = normalizedPackage(packageName);

  /**
   * Create lib folder
   */
  const libFolder = join(process.cwd(), package);
  const promise = createFolder(libFolder);
  
  ora.promise(promise, `Creating library folder`);
  await promise;

  return {
    execution: { 
      libFolder,
      package,
      scope,
    }
  }
}

module.exports = createLibFolder;
