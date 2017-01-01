var express = require('express');
var router = express.Router();
var io = require('socket.io');
var socket = io('http://localhost:3000');
var randomstring = require('randomstring');
module.exports = router;