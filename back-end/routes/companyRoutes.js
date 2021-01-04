const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController.js')

//router.post('/', companyController.addCompany)
router.get('/testStocks', companyController.testeStartCompStocks)
router.get('/getmycompany', companyController.getMyCompany)
router.get('/getcompany', companyController.getCompany)
router.put('/updatecompany', companyController.updateCompany)
router.post('/createComp', companyController.addCompany)
router.get('/getcompanybycompetitionid', companyController.getCompanyByCompetitionId)

module.exports = router
