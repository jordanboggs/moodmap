// Dependencies
var express = require('express');
var moods = require('../mdoels/moods.js');

// Create Router
var router = express.Router();

router.get('/', function(req,res) {
    console.log('Hello home page');
});


// Export File
module.exports = controllers;