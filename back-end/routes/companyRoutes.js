var express = require('express');
var router = express.Router();

var companyController = require('../controllers/companyController.js');

router.post('/', companyController.addCompany);

module.exports = router;