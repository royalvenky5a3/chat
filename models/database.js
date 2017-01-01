var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test3');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("hai");
});

var register = new schema(
	{
		username: {type:String,unique:true} ,
		mail:{type:String,unique:true},
		password: String,
		confirmpassword: String
	}
);

var register = mongoose.model('register',register);
module.exports = register;