var express = require('express');
var db = require("../models");

module.exports = function (app) {
    app.post('/api/survey', function (req, res) {
        console.log(db.Questions);
        console.log('surveys route hit');

        var answersArray = Object.values(req.body);
        console.log(answersArray);
        // Loop through Questions 1-5
        var bulkArray = [];
        for (let i = 1; i <= 5; i++) {
            console.log("questionId:",i);
            console.log("answer:",answersArray[i-1]); // -1 because arrays start at 0
            bulkArray.push({
                questionId: i,
                answer: answersArray[i-1],
                UserUserId: 1 // hard code for now
            });
        }
        db.Questions.bulkCreate(bulkArray).then(function (dbQuestions) {
            res.json(dbQuestions);
        });
    });
}
