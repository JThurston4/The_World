const mongoose = require('mongoose');
const config = require('config')

const connectionString = config.get('connection_string')

mongoose.connect(connectionString)
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Could not connect to database', err))

mongoose.connect(connectionString)