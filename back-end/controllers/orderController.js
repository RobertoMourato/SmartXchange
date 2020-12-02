const orderRepository = require('../repository/orderRepository')

exports.getAllOrders = async function (req, res) {
  try {
    const results = await orderRepository.index(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
exports.addOrder = async function (req, res) {
  try {
    console.log(req.body)
    const results = await orderRepository.addOrder(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
