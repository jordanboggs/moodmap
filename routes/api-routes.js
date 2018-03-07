var Questions = require("../models/questions");
var User = require("../models/user");
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
    });
  

    // jQuery to capture user clicks

    $("#submit-button-id").on("click", function(event) {
        event.preventDefault();
      
        // make a newCharacter obj
        var newSurvey = {
          feeling: $("input[name=likert1]").val().trim(),
          energy: $("input[name=likert2]").val().trim(),
          sleep: $("input[name=likert3]").val().trim(),
          meds: $("input[name=likert4]").val().trim(),
          concentrate: $("input[name=likert5]").val().trim()
        };
      
        // send an AJAX POST-request with jQuery
        $.post("/api/survey", newSurvey)
          // on success, run this callback
          .then(function(data) {
            // log the data we found
            console.log(data);
            // tell the user we're adding a survey with an alert window
            alert("Adding survey..."); // just for testing
          });
      
        // empty each input box by replacing the value with an empty string
        $("input[name=likert1]").val("");
        $("input[name=likert2]").val("");
        $("input[name=likert3]").val("");
        $("input[name=likert4]").val("");
        $("input[name=likert5]").val("");
      
      });