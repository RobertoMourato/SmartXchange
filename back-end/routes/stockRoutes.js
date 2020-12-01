var express = require('express');
var router = express.Router();

var stockController = require('../controllers/stockController'); 

router.get('/',stockController.getAllStocks);
router.post('/',stockController.addStock);

module.exports = router;