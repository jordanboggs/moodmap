/*
 * Following this tutorial:
 * https://code.tutsplus.com/tutorials/using-passport-with-sequelize-and-mysql--cms-27537
 */

const express    = require('express'),
      app        = express(),
      passport   = require('passport'),
      session    = require('express-session'),
      bodyParser = require('body-parser'),
      env        = require('dotenv').load(),
      // exphbs     = require('express-handlebars');

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Models
const models = require('./app/models');

// Routes
const authRoute = require('./app/routes/auth.js')(app, passport);

// Load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// Sync database
models.sequelize.sync()
  .then(() => console.log("Nice! Database looks fine."))
  .catch((err) => console.log(err, "Something went wrong with the Database update!"));

// For Handlebars
// app.set('views', './app/views');
// app.engine('hbs', exphbs({
//   extname: '.hbs'
// }));
// app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.send("Welcome to Passport with Sequelize");
});

app.listen(5000, (err) => {
  if (!err) {
    console.log("Listening on port 5000");
  }
  else {
    console.log(err);
  }
});
