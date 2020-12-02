const express = require('express')
const router = express.Router()

const stockValueController = require('../controllers/stockValueController')

router.get('/all', stockValueController.getAllStocksValues)
router.post('/', stockValueController.addStockValue)

module.exports = router
