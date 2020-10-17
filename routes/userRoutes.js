var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController.js');

router.get("/all", UserController.getUsers);

module.exports = router;