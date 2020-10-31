var express = require('express');
var router = express.Router();


var tenantController = require('../controllers/tenantController'); 

router.get('/',tenantController.getAllTenantTypes);

module.exports = router;