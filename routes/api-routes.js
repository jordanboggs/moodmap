var Question1 = require("../models/question1");
var Question2 = require("../models/question2");
var Question3 = require("../models/question3");
var Question4 = require("../models/question4");
var Question5 = require("../models/question5");
var UserInfo = require("../models/userInfo");

module.exports = function(app) {
    //get user information
    
    //get question1 answers
    app.get("/api/question1", function(req, res) {
        Question1.findAll({
            where: {
                answer: req.params.question1
            }
        }).then(function(results) {
            res.json(results);
        });
    });
    //get question2 answers
    app.get("/api/question2", function(req, res) {
        Question2.findAll({
            where: {
                answer: req.params.question2
            }
        }).then(function(results) {
            res.json(results);
        });
    });
    //get question3 answers
    app.get("/api/question3", function(req, res) {
        Question3.findAll({
            where: {
                answer: req.params.question3
            }
        }).then(function(results) {
            res.json(results);
        });
    });
    //get question4 answers
    app.get("/api/question4", function(req, res) {
        Question4.findAll({
            where: {
                answer: req.params.question4
            }
        }).then(function(results) {
            res.json(results);
        });
    });
    //get question5 answers
    app.get("/api/question5", function(req, res) {
        Question5.findAll({
            where: {
                answer: req.params.question5
            }
        }).then(function(results) {
            res.json(results);
        });
    });
}
