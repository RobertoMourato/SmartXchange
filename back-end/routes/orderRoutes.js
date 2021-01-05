const express = require('express')
const router = express.Router()

const orderController = require('../controllers/orderController')

router.get('/', orderController.getAllOrders)
router.post('/addOrder', orderController.addOrder)
router.get('/getmyorders', orderController.getMyOrders)
router.get('/getallmyorders', orderController.getAllMyOrders)
router.get('/pending/:username', orderController.getPlayerPendingOrders)
router.get('/completed/:username', orderController.getPlayerCompleteOrders)
router.put('/cancel/:id', orderController.cancelOrder)
router.get('/testMatch', orderController.testMatchOrders)

module.exports = router
