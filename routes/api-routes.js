var Questions = require("../models/questions");
var User = require("../models/user");

module.exports = function(app) {
    //get user information
    
    //get question1 answers
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
