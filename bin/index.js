#! /usr/bin/env node

const { Command } = require('commander');
const { bin, description } = require('../package.json');
const karate = require('../karate');

const program = new Command();

program.description(description)
  .name(Object.keys(bin)[0])
  .helpOption('--assist', 'show assistance\ncheck https://github.com/karatelabs/karate/tree/master/karate-netty#usage for karate usage\nor -h to display all available arguments and options')
  .showHelpAfterError('(add --assist for additional information)')
  .showSuggestionAfterError()
  .allowUnknownOption()
  .argument('<args>')
  .option('--use-dir <path>', 'directory to use for Karate tests')
  .option('--use-version <version>', 'karate version to use, LATEST by default', 'LATEST')
  .option('--debug', 'output extra debugging', false)

program.parse(process.argv);

const {
  debug,
  useDir: dir,
  useVersion: version,
} = program.opts();

karate.configure({ dir, version });

if (debug) {
  console.debug('command options:', program.opts());
  console.debug('command arguments:', program.args);
  console.debug(`karate: version ${karate.version}, directory ${karate.config.dir}`);
}

karate.exec(program.args.join(' '));
