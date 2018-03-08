var Questions = require("../models/questions");
var User = require("../models/user");
var db = require("../models");

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
}
  

