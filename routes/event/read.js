var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const eventReadController = require('./../../controller/event/ReadController.js');

router.post('/read/event/email', urlencodedParser, eventReadController.readEventsByEmail);


module.exports = router;