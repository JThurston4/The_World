const pingPong = require('./commands/ping');
const help = require('./commands/help');
const dbTest = require('./commands/raid');
const config = require('config')
require('./db/dbConfig.js')


if (!config.get('loginKey')) {
  console.error('FATAL ERROR: loginKey is not defined.');
  process.exit(1);
}

if (!config.get('loginKey')) {
  console.error('FATAL ERROR: loginKey is not defined.');
  process.exit(1);
}

// pingPong;
dbTest;
help;
pingPong;