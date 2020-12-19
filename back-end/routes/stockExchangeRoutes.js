const express = require('express')
const router = express.Router()

const stockExchangeController = require('../controllers/stockExchangeController')

router.get('/all', stockExchangeController.getAllStockExchanges)
router.post('/', stockExchangeController.addStockExchange)

module.exports = router
