const express = require('express')
const router = express.Router()

const tenantController = require('../controllers/tenantController')
const inviteControlller = require('../controllers/inviteController')

router.get('/', tenantController.getAllTenants)
router.post('/', tenantController.addTenant)
router.post('/invite', inviteControlller.inviteManager)

module.exports = router
