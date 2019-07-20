# react-initializr

> CLI for creating reusable, modern React libraries using Webpack and create-react-app.

<p align="center">
  <img width="600" src="https://raw.githubusercontent.com/gsuaki/react-initializr/master/docs/initializr@2x.gif">
</p>


## Features

- Easy-to-use CLI
- [create-react-app](https://github.com/facebookincubator/create-react-app) for example usage and local dev
- [Webpack](https://webpack.js.org/) for bundling
- [Babel](https://babeljs.io/) for transpiling
- [Jest](https://facebook.github.io/jest/) for testing
- Supports complicated peer-dependencies
- Supports CSS, SCSS and SASS modules


## Install globally

```bash
npm install -g react-initializr
```


## Creating a New Module

```bash
react-initializr cool-component
```

Answer some basic prompts about your module and then the CLI will perform the following steps:
- create the library root folder
- copy over the template
- install dependencies via yarn or npm
- link packages together for local development


## Development

Local development is broken into two parts (ideally using two terminal tabs).

First, run webpack to watch your `src/` module and automatically recompile it into `dist/` whenever you make changes.

```bash
npm start # runs webpack with watch flag
```

The second part will be running the `examples/` create-react-app that's linked to the local version of your module.

```bash
# (in another terminal tab)
cd examples
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your library in `src/` or to the example app's `examples/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.


#### Publishing to npm

```bash
npm publish
```


#### Deploying to Github Pages

```bash
npm run deploy
```

This creates a production build of the example `create-react-app` that showcases your library and then runs `gh-pages` to deploy the resulting bundle.


## Examples

Want to add yours to the list? Submit an [issue](https://github.com/gsuaki/react-initializr/issues/new).


## License

MIT © [Gabriel Suaki](https://github.com/gsuaki)
