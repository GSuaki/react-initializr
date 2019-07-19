const Promise = require('bluebird');
const fs = require('fs');
const globby = require('globby');
const handlebars = require('handlebars');
const mkdirp = require('make-dir');
const ora = require('ora');
const { join, parse, relative } = require('path');

function copyTemplateFile({ config, libFolder, source }) {
  return async file => {
    const fileRelativePath = relative(source, file);
    const destFilePath = join(libFolder, fileRelativePath);
    const destFileDir = parse(destFilePath).dir;

    await mkdirp(destFileDir);

    const content = handlebars.compile(fs.readFileSync(file, 'utf8'))({
      ...config,
      yarn: (config.manager === 'yarn'),
    });

    fs.writeFileSync(destFilePath, content, 'utf8');
    return fileRelativePath;
  }
}

async function copyTemplate({ config, execution: { libFolder }}) {
  /**
   * Copy template
   */
  const source = join(__dirname, '../..', 'templates', 'lib', 'webpack');
  const files = await globby(source, { dot: true });
  const promise = Promise.all(files.map(copyTemplateFile({ config, libFolder, source })));

  ora.promise(promise, `Copying library template`);
  await promise;

  return {};
}

module.exports = copyTemplate;
