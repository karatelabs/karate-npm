# @karatelabs/karate
Seamlessly use the power of [Karate](https://github.com/karatelabs/karate) from Node / JS projects.

## Usage
Given this script `test.js`:

```js
#! /usr/bin/env node
const karate = require('@karatelabs/karate');
karate.exec();
```

And in `package.json`:

```json
{
  "scripts": {
    "test": "node test.js"
  },
  "devDependencies": {
    "@karatelabs/karate": "^0.2.0"
  }
}
```

When you run `npm install`, [jbang](https://www.jbang.dev/) and other Karate dependencies needed will be installed via [`jbang-npm`](https://github.com/jbangdev/jbang-npm).

And to run a single test:

```
npm run test karate/httpbin.feature
```

Or to run all tests in a folder:

```
npm run test karate
```
