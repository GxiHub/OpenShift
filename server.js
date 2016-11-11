//var http = require('http');
express = require('express');
bodyParser = require('body-parser');
MongoClient = require('mongodb').MongoClient;
path = require('path');
moment = require('moment');

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
app.get('/create/',function(req,res){
  var ForYear = moment().format('YYYY');
	//db.collection('quotes').save(req.body,function(err,result){
  db.collection('quotes').save({name:'jeff',quote:'1234567',time:ForYear},function(err,result){
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
app.get('/delete', (req, res) => {
  console.log('delete once');
  db.collection('quotes').findOneAndDelete({name:'jeff'},
  (err, result) => {
    if (err) return res.send(500, err);
     res.redirect('/');
  })
})


// var httpServer = http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-Type': 'text/html'});
//    res.end('<h1>Hello World Doctor Chen</h1>\n');
// });

// httpServer.listen(8080); 
// console.log('Server running at http://127.0.0.1:8080/');
