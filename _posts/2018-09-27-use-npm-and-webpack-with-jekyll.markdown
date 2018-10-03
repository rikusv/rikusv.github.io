---
layout: post
title:  "Use npm and webpack with Jekyll"
categories: [code, notes]
---

# Setup

Enable [npm](https://www.npmjs.com/) for the Jekyll repo by creating a `package.json` file, e.g. using:

```
npm init
```

Install [webpack](https://webpack.js.org/):

```
npm install --save-dev webpack webpack-cli
```

`package.json` should now include something like this:

```json
"devDependencies": {
  "webpack": "^4.20.2",
  "webpack-cli": "^3.1.1"
}
```

There should be a `node_modules` folder with lots of stuff in it. Remember to add it to `.gitignore`, but also add it to `_config.yml` so that Jekyll builds are not slowed down:

```yaml
ignore: [node_modules]
```

Add a `webpack.config.js` file to configure webpack builds (also in the repo root directory):

```javascript
const path = require('path');

module.exports = {
  entry: './_js/index.js',
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'main.js'
  }
};
```

Thus we will write our JavaScript with `import`'s in `_js/index.js` (underscore so that Jekyll ignores it and so that it is consistent with the `_sass` folder convention), and build our bundled code to `assets/main.js`.

Include the JavaScript file somewhere, e.g. in a `layout` or `include`:

```html
<script src="/assets/main.js"></script>
```

# Development

Add needed libraries as usual using:

```
npm install --save some-library
```

And use in `_js/index.js`:

```javascript
import someLibrary from 'some-library';
```

Run `webpack` whenever JavaScript changes are made. If `jekyll serve` is running, the resultant `assets/main.js` file will be detected and included in `_site/`.

# Build

Before committing/deploying, to build `assets/main.js`, simply run:

```
webpack
```
