# React Funny

__Make your user's laugh when loading a view.__


## Demo & Examples

Live demo:
[waltz-app.github.io/react-funny](http://waltz-app.github.io/react-funny/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-funny is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-loading.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-funny --save
```


## Usage
See the demo above.

## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License
MIT licensed.

Copyright (c) 2016 Ryan Gaus.

