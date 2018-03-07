const express    = require('express')
    , app        = express()
    , path       = require('path')
    , passport   = require('passport')
    , session    = require('express-session')
    , bodyParser = require('body-parser')
    , env        = require('dotenv').load()
    , exphbs     = require('express-handlebars');

// Files
// var routes = require('./controllers/controllers.js');

// Port
const PORT = process.env.PORT || 3000;

//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// For Passport
app.use(session({
  secret: process.env.LOCAL_SECRET, 
  resave: true, 
  saveUninitialized:true
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Models
const models = require('./models');

// Routes
const authRoute = require('./routes/auth.js')(app, passport);
app.use(express.static(path.join(__dirname, '/public')));

// Load passport strategies
require('./config/passport/passport.js')(passport, models.User);

// Sync database
models.sequelize.sync()
  .then(() => console.log("Nice! Database looks fine."))
  .catch((err) => console.log(err, "Something went wrong with the Database update!"));

// For Handlebars
app.set('views', './views');
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log("Listening on port",PORT);
  }
  else {
    console.log(err);
  }
});
