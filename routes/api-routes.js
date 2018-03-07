var Questions = require("../models/questions");
var User = require("../models/user");
var db = require("../models");

module.exports = function(app) {
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
};