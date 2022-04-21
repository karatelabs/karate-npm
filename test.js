#! /usr/bin/env node
var karate = require('./karate');
// karate.version = '1.2.0.RC6';
karate.config.dir = 'karate'
karate.exec();
