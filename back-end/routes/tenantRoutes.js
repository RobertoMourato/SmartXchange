var express = require('express');
var router = express.Router();

var tenantController = require('../controllers/tenantController'); 
var inviteControlller = require('../controllers/inviteController');

router.get('/',tenantController.getAllTenants);
router.post('/',tenantController.addTenant);
router.post('/invite',inviteControlller.inviteManager);
router.put('/update', tenantController.updateTenant)

module.exports = router;