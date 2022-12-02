const jbang = require('@jbangdev/jbang');
const karate = {};
karate.version = 'LATEST';
karate.config = {};
karate.jvm = {args:''};
karate.executable = function () {
	let prefix = karate.config.dir ? '-Dkarate.config.dir=' + karate.config.dir + ' '  : '';
	return prefix + 'com.intuit.karate:karate-core:' + karate.version + ':all';
};
karate.exec = function (args) {
	args = (!args ? '' : args + ' ') + process.argv.slice(2).join(' ');
	process.env['KARATE_META'] = 'npm:' + process.env.npm_package_version;
	jbang.exec(karate.jvm.args + ' ' + karate.executable() + ' ' + args);
};
module.exports = karate;
