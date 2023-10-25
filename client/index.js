console.log("Lotus project case study by Tulika Choudhury::");
var express = require('express');  
var MongoClient = require('mongodb').MongoClient;

var app = express();
app.use(express.static('public'));

var url = "mongodb+srv://Tulika2023:YsHW7I6JTeGMRf3g@cluster0.guzjbni.mongodb.net/?retryWrites=true";
var connect = new MongoClient(url);

app.get('/', async function (req, res) {  
    response = await demo1(); 
       console.log("API response",response);  
       res.end(JSON.stringify(response));  
    })

var server = app.listen(8000, function () {  
    var host = server.address().address  
    var port = server.address().port  
    console.log("Lotus project case study app listening at http://%s:%s", host, port)  
    
  })

  async function demo1(){
    var response = connect.db("lotus1");
    var database = response.collection("case_study1"); 
    var record = await database.find({}).sort({length:-1}).toArray();
    return record;
}