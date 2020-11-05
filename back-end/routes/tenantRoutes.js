var express = require('express');
var router = express.Router();

var tenantController = require('../controllers/tenantController'); 

router.get('/',tenantController.getAllTenants);
router.post('/',tenantController.addTenant);

module.exports = router;