# @karatelabs/karate

## Usage
Given this script `karate/test.js`:

```js
#! /usr/bin/env node
const karate = require('@karatelabs/karate');
karate.run();
```

And in `package.json`:

```json
{
  "scripts": {
    "test": "node karate/test.js"
  },
  "devDependencies": {
    "@karatelabs/karate": "^0.1.0"
  }
}
```

Make sure you run `npm install` once. This will install [jbang](https://www.jbang.dev/) and other dependencies if needed.

And to run a single test:

```
npm run test karate/httpbin.feature
```

Or to run all tests in a folder:

```
npm run test karate
```