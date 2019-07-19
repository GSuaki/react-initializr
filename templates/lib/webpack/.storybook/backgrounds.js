const { withBackgrounds } = require('@storybook/addon-backgrounds');

module.exports.whiteBackground = withBackgrounds([
  { name: 'white', value: '#fff', default: true },
  { name: 'gray', value: '#ebebeb' },
]);

module.exports.grayBackground = withBackgrounds([
  { name: 'white', value: '#fff' },
  { name: 'gray', value: '#ebebeb', default: true },
]);
