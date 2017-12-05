const mongoose = require('mongoose');

// Database Connection
function setupDb() {
  mongoose.Promise = global.Promise;
  const env = process.env.NODE_ENV;
  const dbConnectionString = (env === 'testing')
    ? 'mongodb://127.0.0.1:27017/salasDB'
    : 'mongodb://appuser:s4l4s@ds111882.mlab.com:11882/salasdb';
  mongoose.connect(dbConnectionString);
  return mongoose.connection;
}

module.exports = setupDb;