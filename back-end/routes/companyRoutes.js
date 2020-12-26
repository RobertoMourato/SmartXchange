const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController.js')

router.get('/getcompany', companyController.getCompany)
router.post('/createComp', companyController.addCompany)


module.exports = router
