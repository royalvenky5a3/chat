var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var register = mongoose.model("register",register);
register.find({},function(err,data){
	console.log(data);
});
/* GET home page. */	
router.get('/', function(req, res, next) {
	console.log("hai" );
  // user.find({},function(err,data){
  // 	console.log(data);
  // });
  res.render('register', { error: 'error registration' });
});
router.post('/reg',function(req,res,next){
	// console.log(req.body.username);
	// console.log(req.body.mail);
	// console.log(req.body.password);
	// console.log(req.body.confirmpassword);
	reg = new register();
	reg.username = req.body.username;
	reg.mail = req.body.mail;
	reg.password = req.body.password;
	reg.confirmpassword = req.body.confirmpassword;
	reg.save(function(err){
		if(err){
			res.redirect("/register?failed");
		}
		else{
			res.redirect("/index?uname="+req.body.username);
		}
	});
});

module.exports = router;
