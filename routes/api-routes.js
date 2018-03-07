var Questions = require("../models/questions");
var User = require("../models/user");
var db = require("../models");
var Survey = require("../models/survey");  // New survey Model require ??

module.exports = function(app) {
    //get user information for dashboard
    app.get("/api/user", function(req, res) {
        User.findAll({
            where: {
                username: req.params.user
            }
        });
    });

    //get question answers
    app.get("/api/questions", function(req, res) {
        Questions.findAll({
            where: {
                answer: req.params.questions
            }
        }).then(function(results) {
            res.json(results);
        });
    });
}

app.post('/api/survey', function(req,res) {
    var surveyData = req.body;

    // maybe query the user table to find the user who is logged in and pass that into the Survey.create method??

    User.findOne({
        where: {
          userId: req.params.userid // grab user id from a parameter that is passed into the route from the survey onclick??
        }
      }).then(function(userid) {
        // new survey model maybe??
        Survey.create({
          feeling: surveyData.likert1,
          energy: surveyData.likert2,
          sleep: surveyData.likert3,
          meds: surveyData.likert4,
          concentrate: surveyData.likert5,
          userID: userid // passed in from the User find userid query 
        });
      });
  
  // GET route for getting all of the question data
    app.get("/api/charts/question_id/:id", function(req, res) {
        var query = {};
        console.log(req.params.id);
        if (req.params.id) {
        query.questionId = req.params.id;
        }
        db.Questions.findAll({
        where: query
    }).then(function(db) {
        res.json(db);
        });
    }); 
});
  

