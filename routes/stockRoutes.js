var express = require('express');
var router = express.Router();


var stockController = require('../controllers/stockController'); 

router.use('/my-stocks/:username',stockController.getMyStocks);

module.exports = router;