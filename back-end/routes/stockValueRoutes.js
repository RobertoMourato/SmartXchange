var express = require('express');
var router = express.Router();

var stockValueController = require('../controllers/stockValueController'); 

router.get('/all',stockValueController.getAllStocksValues);
router.post('/',stockValueController.addStockValue);

module.exports = router;