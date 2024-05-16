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
    "@karatelabs/karate": "^0.2.2"
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

## Known Issues
Users on Windows have reported [issues](https://github.com/karatelabs/karate-npm/issues/2) such as the `npm install` failing to complete and without any errors shown.

Please do contribute if you can and improve how JavaScript projects can integrate smoothly with Java projects !

As a workaround, please [install JBang manually](https://www.jbang.dev/documentation/guide/latest/installation.html) and re-try the `npm install` step.

## Setting Karate Version

To use a specific version of Karate, just set `karate.version` before calling `karate.exec()`:

```js
#! /usr/bin/env node
const karate = require('@karatelabs/karate');
karate.version = '1.2.0';
karate.exec();
```

## CLI Reference
All Karate capabilities can be invoked by the command-line.

The most common needs are to:

* run feature-file(s) or all feature-files in a folder as Karate tests 
* start an API mock-server

The complete documentation can be found [here](https://github.com/karatelabs/karate/tree/master/karate-netty#usage).

You can also use the `--help` command-line option to see all the possible options and brief descriptions on the console.

### `karate-config.js`

Karate will look for a [`karate-config.js`](https://github.com/karatelabs/karate#configuration) file in the current working directory.

But if you need to point to a different directory, you can set `karate.config.dir` before calling `karate.exec()`

To pass arguments to the JVM use the jvm object `karate.jvm.args`

CLI options can be passed as a string to the `karate.exec('-T=5')` method.

```js
#! /usr/bin/env node
const karate = require('@karatelabs/karate');
karate.config.dir = '/users/myname/some/dir';
karate.jvm.args = `-Dlogback.configurationFile=${__dirname}/logback-test.xml`;
karate.exec("-T=5");
```

## Custom Java Classpath

For teams that want to customize the Java classpath by adding libraries or custom-code, please refer to the wiki: [Custom Fat JAR](https://github.com/karatelabs/karate/wiki/Get-Started:-Other-Runtime-Options#custom-fat-jar). This may be easier to achieve by using Maven to prepare a Docker image, which can then be used by teams on the command-line without needing NPM, Java or Karate - and only Docker is a pre-requisite.

If you want to use additional Java libraries or custom code *and* avoid Maven and Java dev-tools, refer to this example: [Using Java Libraries with NPM](https://github.com/karatelabs/karate-examples/blob/main/jbang-npm/README.md).
