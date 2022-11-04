var express = require('express');
var router = express.Router();

const userCreateController = require('./../../controller/user/CreateController.js');

router.post('/create/user', userCreateController.createUser);



module.exports = router;