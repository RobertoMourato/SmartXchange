const express = require('express')
const router = express.Router()

const orderController = require('../controllers/orderController')

router.get('/', orderController.getAllOrders)
router.post('/', orderController.addOrder)
router.get('/pending/:username', orderController.getPlayerPendingOrders)
router.get('/completed/:username', orderController.getPlayerCompleteOrders)
router.put('/cancel/:id', orderController.cancelOrder)
router.get('/testMatch', orderController.testMatchOrders)

module.exports = router
