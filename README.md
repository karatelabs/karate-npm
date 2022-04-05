# @karatelabs/karate
Seamlessly use the power of [Karate](https://github.com/karatelabs/karate) from Node / JS projects.

## Usage
Given this script `test.js`:

```js
#! /usr/bin/env node
const karate = require('@karatelabs/karate');
karate.exec();
```

And in `package.json` (use the latest version from [npm](https://www.npmjs.com/package/@karatelabs/karate)):

```json
{
  "scripts": {
    "test": "node test.js"
  },
  "devDependencies": {
    "@karatelabs/karate": "^0.2.1"
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

## CLI Reference
All Karate capabilities can be invoked by the command-line.

The most common needs are to:

* run feature-file(s) or all feature-files in a folder as Karate tests 
* start an API mock-server

The complete documentation can be found [here](https://github.com/karatelabs/karate/tree/master/karate-netty#usage).
