var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const eventUpdateController = require('./../../controller/event/UpdateController.js');

router.put('/update/acceptinvitation', urlencodedParser, eventUpdateController.acceptInvitation);

router.put('/update/declineinvitation', urlencodedParser, eventUpdateController.declineInvitation);

module.exports = router;