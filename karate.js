const jbang = require('@jbang/jbang');
const karate = {};
karate.version = '1.2.0.RC5';
karate.executable = 'com.intuit.karate:karate-core:' + karate.version + ':all';
karate.exec = function (args) {
	if (!args) {
		args = process.argv.slice(2).join(' ');
	}
	jbang.exec(karate.executable + ' ' + args);
};
module.exports = karate;
