var MongoClient = require('mongodb').MongoClient; 
// 
var url = "mongodb://127.0.0.1:27017/KJSSE1";  


MongoClient.connect(url,function(err, db) {  
if (err) throw err;  
console.log("Database created!");  
console.log(db.databaseName);

//create variable to store the db
var dbase = db.db("KJSSE1");

dbase.createCollection("IA1", function(err, res) {  
    if (err) throw err;  
    console.log("Collection is created!"); 
    console.log(dbase.databaseName);
    //db.close();    // connection closed
});  
//close connection
db.close();  

});  
