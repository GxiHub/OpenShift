//var http = require('http');
express = require('express');
bodyParser = require('body-parser');
MongoClient = require('mongodb').MongoClient;
path = require('path');
moment = require('moment');
database = require('./db');

app = express();

//app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:true}));

var db;

MongoClient.connect('mongodb://gxi0306:mini0306@ds017248.mlab.com:17248/star-wars-quotes', function(err, database){
  if (err) return console.log(err);
  db = database;
  app.listen(8080, function(){
    console.log('listening on 8080');
  })
}) 

// Create (POST) - Make something
app.post('/create/Beef/',function(req,res){
  database.timeset(req,function(error,results){
      if(error)return console.log (error);
      console.log('saved to database ',JSON.stringify(results[0]));
  });
  res.redirect('/');
});

// Create (POST) - Make something
app.post('/create/Pork/',function(req,res){
  var ForYear = moment().format('MMMM Do YYYY, h:mm:ss a');
  //db.collection('quotes').save(req.body,function(err,result){
  db.collection('quotes').save({uniID:Date.now(),name:'豬肉',status:req.body.status,time:ForYear},function(err,result){
    if(err)return console.log(err);
    console.log('saved to database ', ForYear);
    res.redirect('/');
  });
});

// Read (GET) - Get something
app.get('/',function(req,res){
	db.collection('quotes').find().toArray(function(err, results) {
  		res.render('index.ejs',{quotes:results});
	});
});


// Delete (DELETE) - Remove something
app.get('/delete/Beef/', (req, res) => {
  console.log('delete once');
  db.collection('quotes').findOneAndDelete({name:'牛肉'},
  (err, result) => {
    if (err) return res.send(500, err);
     res.redirect('/');
  });
});

// Delete (DELETE) - Remove something
app.get('/delete/Pork/', (req, res) => {
  console.log('delete once');
  db.collection('quotes').findOneAndDelete({name:'豬肉'},
  (err, result) => {
    if (err) return res.send(500, err);
     res.redirect('/');
  });
});

// Delete (DELETE) - Remove something
app.post('/delete/', (req, res) => {
  console.log('delete once  = ',req.body.timeID);
  db.collection('quotes').findOneAndDelete({timeID:parseInt(req.body.timeID,10)},
  (err, result) => {
    if (err) return res.send(500, err);
     res.redirect('/');
  });
});

