var express = require('express');
var router = express.Router();

var stockExchangeController = require('../controllers/stockExchangeController'); 

router.get('/all',stockExchangeController.getAllStockExchanges);
router.post('/',stockExchangeController.addStockExchange);

module.exports = router;