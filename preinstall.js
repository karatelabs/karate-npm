const karate = require('./index');
console.log('pre-installing jbang ...');
karate.jbang('app setup');
karate.jbang(karate.executable);
console.log('pre-install of jbang complete');
