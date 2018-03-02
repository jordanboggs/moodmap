// Dependencies
var mySQL = require('mysql');

// MYSQL Connection
var connection = mysql.createConnection({
    port: 8889,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: ''
});



connect.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});


// Exports file
module.exports = connection;