const express = require('express')
const router = express.Router()

const stockController = require('../controllers/stockController')

router.get('/', stockController.getAllStocks)
router.get('/stocksowned', stockController.getStocksOwned)
router.post('/', stockController.addStock)

module.exports = router
