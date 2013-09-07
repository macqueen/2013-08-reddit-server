var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema;

module.exports = function(app, config) {
  var db = mongoose.connect(config.db);
  console.log(db);

  var UserSchema = new Schema({
    username: 'string',
    password: 'string'
  });
  mongoose.model('User', UserSchema);

  // Setup database and UserSchema

  return db;
};