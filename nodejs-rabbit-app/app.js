var environment = require("./environment");

var rabbitUrl = environment.getRabbitUrl();
console.log("Connecting to rabbitMQ at " + rabbitUrl);

var context = require('rabbit.js').createContext(rabbitUrl);
context.on('ready', function() {
  var pub = context.socket('PUB'), sub = context.socket('SUB');
  sub.pipe(process.stdout);
  sub.connect('events', function() {
    pub.connect('events', function() {
      pub.write(JSON.stringify({welcome: 'rabbit.js'}), 'utf8');
    });
  });
});