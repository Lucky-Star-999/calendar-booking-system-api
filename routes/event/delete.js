var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const eventDeleteController = require('./../../controller/event/DeleteController.js');

router.delete('/delete/event', urlencodedParser, eventDeleteController.deleteEvent);


module.exports = router;