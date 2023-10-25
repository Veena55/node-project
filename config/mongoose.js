//require the library
const mongoose = require('mongoose');
//connect to the database
mongoose.connect('mongodb://0.0.0.0:27017/codiel_development');

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.error.bind(console, 'Something wrong'); });

//up and running then print the message
// console.log("Hii");
db.once('open', () => {  
    console.log("Successfully connected to the database");
});

module.exports = db;