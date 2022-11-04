var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const userReadController = require('./../../controller/user/ReadController.js');

router.post('/read/user/login', urlencodedParser, userReadController.readPassword);

module.exports = router;