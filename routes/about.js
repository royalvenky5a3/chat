var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('about.ejs', { title: 'about' });
});
//router.post('/',cuntion)
router.post('/', function(req, res, next) {
	res.write("hello");
	console.log(req.body.name);
	res.redirect('/');
});
module.exports = router;
