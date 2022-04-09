#! /usr/bin/env node
var karate = require('./karate');
karate.version = '2.0.0';
karate.config.dir = 'karate'
karate.exec();
