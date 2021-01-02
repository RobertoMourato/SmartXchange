const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController.js')

router.get('/getmycompany', companyController.getMyCompany)
router.put('/updatecompany', companyController.updateCompany)
router.post('/createComp', companyController.addCompany)

module.exports = router
