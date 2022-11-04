var express = require('express');
var router = express.Router();

const userReadController = require('./../../controller/user/ReadController.js');

router.post('/read/user/login', userReadController.readPassword);

module.exports = router;