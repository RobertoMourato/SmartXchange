var express = require('express');
var router = express.Router();

var companyController = require('../controllers/companyController'); 

router.get('/all',companyController.getAllEvaluations);
router.post('/',companyController.addEvaluation);

module.exports = router;