var express = require('express');
var router = express.Router();

var authController = require('../controllers/AuthController')

router.get('/', authController.login);

module.exports= router;