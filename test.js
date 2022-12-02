#! /usr/bin/env node
var karate = require('./karate');
karate.version = '1.3.0';
karate.config.dir = 'karate'
karate.exec();
