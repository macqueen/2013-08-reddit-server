var passport      = require('passport'),
    mongoose      = require('mongoose'),
    User          = mongoose.model('User');

module.exports = function(app, config) {
  app.options('*', function(req, res){
    res.send(200);
  });

  // Setup API blockade
  app.all('/api/*', function(req, res, next) {
    // passport gives us a 'isAuthenticated' method
    // we'll check this method
    if (req.isAuthenticated()) return next();

    return res.send(401, 'Unauthorized');
  });

  // Auth
  app.post('/login', function(req, res, next) {
    // Implement login
    // check to see if username and password match a username and password in our DB
    //if so, redirect to '/'
    // else redirect to '/login' w/ error message
  });

  app.post('/signup', function(req, res, next) {
    // Implement signup
    // make function to add req.body info to db
    // 
    var user = new User(req.body);
    console.log(user, req.body);
    user.save(function(err){
      if(err){
        console.log(err);
      }
    });
    res.send(200);
  });

  app.get('/api/news', function(req, res, next) {
    // Implement news api
  });

  app.get('/api/rate', function(req, res, next) {
    // Implement news rating
  });
};