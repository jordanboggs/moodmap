var Questions = require("../models/questions");
var User = require("../models/user");

module.exports = function(app) {
    //get user information
    
    //get question answers
    app.get("/api/questions", function(req, res) {
        Questions.findAll({
            where: {
                answer: req.params.question
            }
        }).then(function(results) {
            res.json(results);
        });
    });
}
