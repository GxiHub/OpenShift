MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb://gxi0306:mini0306@ds017248.mlab.com:17248/star-wars-quotes', function(err, database){
  db = database;
  if (err) return console.log(err);
}) 

exports.timeset = function(req,callback){
	var in_stock_time = moment().subtract(10,'day').calendar();
	var totalprice = Math.round(req.body.weight*req.body.price,10)
	var docs = [];
	docs.push(in_stock_time);
	docs.push(totalprice);
	callback(null, docs);
 	db.collection('quotes').save({timeID:Date.now(),uniID:req.body.number,name:req.body.beefitem,weight:req.body.weight,total:totalprice,price:req.body.price,time:in_stock_time},function(err,result){
		if(err)return console.log(err);
		console.log('save data to database via timeset()');
	});
	
}
