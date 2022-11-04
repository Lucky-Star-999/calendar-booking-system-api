var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const userCreateController = require('./../../controller/user/CreateController.js');

router.post('/create/user', urlencodedParser, userCreateController.createUser);



module.exports = router;