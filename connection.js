const mongoose = require("mongoose");

// Connecting to database
mongoose.connect('mongodb://127.0.0.1:27017/MTech');
    
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("Connection Successful!");
});
