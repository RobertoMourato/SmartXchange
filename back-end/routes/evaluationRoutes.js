const express = require('express')
const router = express.Router()

const companyController = require('../controllers/companyController')

router.get('/all', companyController.getAllEvaluations)
router.post('/', companyController.addEvaluation)

module.exports = router
