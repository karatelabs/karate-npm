# karate-npm

## Usage
Given this script `karate/test.js`:

```js
#! /usr/bin/env node
const karate = require('karate-npm');
karate.run();
```

And in `package.json`:

```json
{
	"scripts": {
		"test": "node karate/test.js"
	},
	"devDependencies": {
		"karate-npm": "0.1.0"
	}
}
```

And to run a single test:

```
npm run test karate/httpbin.feature
```

Or to run all tests in a folder:

```
npm run test karate
```