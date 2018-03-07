var Questions = require("../models/questions");
var User = require("../models/user");

module.exports = function(app) {
    //get user information
    
<<<<<<< HEAD
    //get question1 answers
    app.get("/api/questions", function(req, res) {
        Questions.findAll({
            where: {
                answer: req.params.questions
=======
    //get question answers
    app.get("/api/questions", function(req, res) {
        Questions.findAll({
            where: {
                answer: req.params.question
>>>>>>> master
            }
        }).then(function(results) {
            res.json(results);
        });
    });
}
