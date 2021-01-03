const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController.js')

//router.post('/', companyController.addCompany)
router.get('/testStocks', companyController.testeStartCompStocks)
router.get('/getcompany', companyController.getCompany)
router.post('/createComp', companyController.addCompany)

module.exports = router
