const express = require('express')
const router = express.Router()

const tenantController = require('../controllers/tenantController')

router.get('/', tenantController.getAllTenantTypes)

module.exports = router
