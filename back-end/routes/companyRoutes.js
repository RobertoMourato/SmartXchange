const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController.js')

router.post('/', companyController.addCompany)
router.get('/testStocks', companyController.testeStartCompStocks)

module.exports = router
