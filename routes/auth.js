const authController = require('../controllers/authcontroller.js')
    , path = require('path');

module.exports = function(app, passport) {
  app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/signup.html"));
  });
  app.get('/signin', function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get('/survey', isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
  app.get('/charts', isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/charts.html"));
  });
  app.get('/logout', authController.logout);

  // For getting user ID to HTML page
  app.get('/api/userId', function(req, res) {
    const userId = {"userId": req.user.userId}
    // console.log("userId",userId);
    return res.json(userId);
  });  
  
  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/survey',
    failureRedirect: '/signup'
  }));
  app.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/survey',
    failureRedirect: '/signin'
  }));

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/signin');
  }
};