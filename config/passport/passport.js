const bCrypt = require('bcrypt-nodejs');

module.exports = function(passport, user) {
  const User = user;
  const LocalStrategy = require('passport-local').Strategy;

  // Local Signup
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      const generateHash = (password) => bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);

      // Check to see if user already exists, and if not, add them
      User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        if (user) {
          return done(null, false, {
            message: "That email is already taken"
          });
        }
        else {
          const userPassword = generateHash(password);
          const data = {
            email: email,
            password: userPassword,
            username: email,
            firstname: req.body.firstname,
            lastname: req.body.lastname
          };

          User.create(data).then(function(newUser, created) {
            if (!newUser) return done(null, false);
            if (newUser) return done(null, newUser);
          });

//           function deletePost() {
//     var ask = window.confirm("Are you sure you want to delete this post?");
//     if (ask) {
//         window.alert("This post was successfully deleted.");

//         window.location.href = "window-location.html";

//     }
// }
        }
      });
    }
  ));

  // Local Signin
  passport.use('local-signin', new LocalStrategy(
    {
      // by default, local strategy uses username and password, but we want email
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      const User = user;
      const isValidPassword = 
        (userpass, password) => bCrypt.compareSync(password, userpass);
      
      User.findOne({
        where: {
          email: email
        }
      }).then(function(user) {
        if (!user) {
          return done(null, false, {
            message: "Email does not exist"
          });
        }
        if (!isValidPassword(user.password, password)) {
          return done(null, false, {
            message: "Incorrect password."
          });
        }

        const userinfo = user.get();
        return done(null, userinfo);
      }).catch(function(err) {
        console.log("Error:",err);
        
        return done(null, false, {
          message: "Something went wrong with your signin."
        });
      });
    }
  ));

  // Serialize user
  passport.serializeUser(function(user, done) {
    done(null, user.userId);
  });

  // Deserialize user
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) done(null, user.get());
      else done(user.errors, null);
    });
  });
};
