var express = require('express');
var router = express.Router();

var UserController = require('../controllers/userController.js');
var inviteControlller = require('../controllers/inviteController')


router.get("/all", UserController.getUsers);
router.post('/', UserController.addUser);
router.post('/invite', inviteControlller.inviteUser);

module.exports = router;