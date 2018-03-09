var express = require('express');
var db = require("../models");

var router = express.Router();

router.post('/api/survey', function(req, res) {
    console.log(db.moodmap);  
    console.log('surveys route hit');
}


    
// // Create 
// router.post('/', function(req, res) {
//     MoodMap.create(req.body).then(function(moodmap) {
//         res.send('/moodmap' + moodmap.id);
//     });
// });


module.exports = router;