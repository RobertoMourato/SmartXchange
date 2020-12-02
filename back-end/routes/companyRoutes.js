const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController.js')

router.post('/', companyController.addCompany)

module.exports = router
