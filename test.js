#! /usr/bin/env node
var karate = require('./karate');
karate.version = '1.5.0';
karate.config.dir = 'karate'
karate.exec();
