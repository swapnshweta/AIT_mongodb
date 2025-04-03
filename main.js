// URL at which MongoDB service is running
var url = "mongodb://127.0.0.1:27017";
 
// A Client to MongoDB
var MongoClient = require('mongodb').MongoClient;
 
// Make a connection to MongoDB Service
async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017');
    database = client.db('file-demo');
   }
