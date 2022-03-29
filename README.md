# @karatelabs/karate

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

Make sure you run `npm install` once. This will install [jbang](https://www.jbang.dev/) and other Karate dependencies if needed via [`jbang-npm`](https://github.com/jbangdev/jbang-npm).

And to run a single test:

```
npm run test karate/httpbin.feature
```

Or to run all tests in a folder:

```
npm run test karate
```
