const { configure } = require('@storybook/react');
const { setOptions } = require('@storybook/addon-options');

const req = require.context('../src', true, /\.story\.js$/)

require('./commons.scss');

setOptions({
  name: 'React Initializr',
  url: 'https://github.com/GSuaki/react-initializr',
});

function loadStories() {
  req.keys()
    .forEach((filename) => req(filename))
}

configure(loadStories, module);
