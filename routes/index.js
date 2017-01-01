var express = require('express');
var router = express.Router();

// var mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost/test1");
// var userschema = mongoose.Schema({});
// var user = mongoose.model("user",userschema);
/* GET home page. */

router.get('/', function(req, res, next) {
  // user.find({},function(err,data){
  // 	console.log(data);
  // });
  res.render('index', { title: 'Home' });
});
// router.post('/send',function(req,res,next){
// 	console.log(req.body.name);
// 	//alert("done");
// 	//res.write("hello");
// 	res.redirect('/index');
// });

module.exports = router;
