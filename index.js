const shell = require('shelljs');
const karate = {};
karate.version = '1.2.0.RC5';
karate.executable = 'com.intuit.karate:karate-core:' + karate.version + ':all';
karate.jbang = function(argLine) {
	if (shell.which('jbang') 
		|| (process.platform === 'win32' && shell.which('./jbang.cmd'))
		|| shell.which('./jbang')) {		
		console.log('using jbang:', argLine);
		shell.exec('jbang ' + argLine);
	} else if (shell.which('curl') && shell.which('bash')) {
		console.log('using curl + bash:', argLine);
		shell.exec('curl -Ls https://sh.jbang.dev | bash -s - ' + argLine);
	} else if (shell.which('powershell')) {
		console.log('using powershell:', argLine);
		shell.exec('echo iex "& { $(iwr -useb https://ps.jbang.dev) } $args" > %TEMP%/jbang.ps1');	
		shell.exec('powershell -Command "%TEMP%/jbang.ps1 ' + argLine + '"');		
	} else {
		shell.echo('unable to pre-install jbang:', argLine);
		shell.exit(1);
	}
};
karate.run = function (args) {
	if (!args) {
		args = process.argv.slice(2).join(' ');
	}
	karate.jbang(karate.executable + ' ' + args);
};
module.exports = karate;
