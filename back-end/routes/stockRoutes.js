const express = require('express')
const router = express.Router()

const stockController = require('../controllers/stockController')

router.get('/', stockController.getAllStocks)
router.get('/stocksowned', stockController.getStocksOwned)
router.get('/allstocksowned', stockController.getAllStocksOwned)
router.post('/', stockController.addStock)

module.exports = router
