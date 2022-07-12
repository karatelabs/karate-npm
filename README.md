# @karatelabs/karate <!-- omit in toc -->

Seamlessly use the power of [Karate](https://github.com/karatelabs/karate) from Node / JS projects.

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
  - [Configuration file](#configuration-file)
  - [As a library](#as-a-library)
    - [configure(options)](#configureoptions)
    - [exec(args)](#execargs)
  - [As a wrapper CLI](#as-a-wrapper-cli)
    - [Wrapper options](#wrapper-options)
    - [Wrapper arguments](#wrapper-arguments)
    - [Examples](#examples)
    - [CLI Reference](#cli-reference)
- [Known Issues](#known-issues)

## Installation

`npm i @karatelabs/karate --save`

Prefer installing the package globally if you want to use it as a CLI wrapper of `Karate`:

`npm i -g @karatelabs/karate`

When you run `npm install`, [jbang](https://www.jbang.dev/) and other Karate dependencies needed will be installed via [`jbang-npm`](https://github.com/jbangdev/jbang-npm).

## Usage

### Configuration file

Karate will look for a `karate-config.js` file in the current working directory.

But if you need to point to a different directory, you can set the configuration directory with `karate.configure` function before calling `karate.exec()`. You can also configure karate via [CLI](as-a-cli) options.

Example file: [karate-config.js](karate/karate-config.js).

### As a library

```js
const karate = require('@karatelabs/karate ');
```

`karate` is an object exposing the following.

#### configure(options)

Configure the directory where to run tests and the version of the karate executable to run.

- `options` **<Object\>**
  - `dir` **<String\>** Path to directory used for Karate tests. *Default*: `.` *Required*: `false`
  - `version` **<String\>** [Karate version](https://github.com/karatelabs/karate/releases) to use. See also [Karate with JBang](https://karatelabs.github.io/karate/karate-netty/#jbang). *Default*: `LATEST` *Required*: `false`
- Returns: **<undefined\>**

Example:

```js
karate.configure({ dir: '.', version: '1.2.0' });
```

#### exec(args)

Execute a Karate command by using the `jbang.exec()` function with the `jbang` executable. All Karate capabilities can be found [here](https://github.com/karatelabs/karate/tree/master/karate-netty#usage).

- `args` **<String\>** Arguments and options to pass to the Karate command. *Default*: None *Required*: `true`
- Returns: **<undefined\>**

Examples:

```js
// run a single test
karate.exec('karate/httpbin.feature');

// run all tests in a folder
karate.exec('karate/');
```

### As a wrapper CLI

Package preferably installed globally, you can run in a shell the command named `karate`. This command is a wrapper of the `karate` command run by JBang.

#### Wrapper options

- `--use-dir <path>` Directory to use for Karate tests. *Default*: `.` *Required*: `false`
- `--use-version <version>` [Karate version](https://github.com/karatelabs/karate/releases) to use. See also [Karate with JBang](https://karatelabs.github.io/karate/karate-netty/#jbang). *Default*: `LATEST` *Required*: `false`
- `--assist` Show assistance. *Default*: None *Required*: `false`
- `--debug` Output extra debugging. *Default*: `false` *Required*: `false`

#### Wrapper arguments

- `<args>` Command to be run by `karate`. *Default*: None *Required*: `true`

#### Examples

```shell
# run a single test
karate --use-dir . --use-version 1.2.0 --debug karate/httpbin.feature

# run all tests in a folder
karate karate/
```

#### CLI Reference

All Karate capabilities can be invoked by the command-line.

The most common needs are to:

- run feature-file(s) or all feature-files in a folder as Karate tests
- start an API mock-server

The complete documentation can be found [here](https://github.com/karatelabs/karate/tree/master/karate-netty#usage).

You can also use the `--help` command-line option to see all the possible options and brief descriptions on the console.

## Known Issues

Users on Windows have reported [issues](https://github.com/karatelabs/karate-npm/issues/2) such as the `npm install` failing to complete and without any errors shown.

Please do contribute if you can and improve how JavaScript projects can integrate smoothly with Java projects !

As a workaround, please [install JBang manually](https://www.jbang.dev/documentation/guide/latest/installation.html) and re-try the `npm install` step.
