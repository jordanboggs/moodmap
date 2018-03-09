var express = require('express');
var db = require("../models");

module.exports = function (app) {
    app.post('/api/survey', function (req, res) {
        console.log(db.Questions);
        console.log('surveys route hit');

        var answersArray = Object.values(req.body);

        for (let i = 1; i <= 5; i++) {
            db.Questions.create({
                questionId: i,
                answer: answersArray[i]
            })
        }


    });
}



// // POST route for saving a new todo
// app.post("/api/todos", function(req, res) {
//     // create takes an argument of an object describing the item we want to
//     // insert into our table. In this case we just we pass in an object with a text
//     // and complete property
//     db.Todo.create({
//       text: req.body.text,
//       complete: req.body.complete
//     }).then(function(dbTodo) {
//       // We have access to the new todo as an argument inside of the callback function
//       res.json(dbTodo);
//     });
//   });