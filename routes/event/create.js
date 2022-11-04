var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const eventCreateController = require('./../../controller/event/CreateController.js');

router.post('/create/event', urlencodedParser, eventCreateController.createEvent);


module.exports = router;