var express = require('express');
var router = express.Router();

var orderController = require('../controllers/orderController'); 

router.get('/',orderController.getAllOrders);
router.post('/',orderController.addOrder);

module.exports = router;