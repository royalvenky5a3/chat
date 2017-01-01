var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('request', { title: 'Home' });
});

module.exports = router;
