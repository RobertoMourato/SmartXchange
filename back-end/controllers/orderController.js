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
    console.log("adicionando order")
    const results = await orderRepository.addOrder(req.body)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
exports.getMyOrders = async function (req, res) {
  try {
    const results = await orderRepository.getMyOrders(req.query.companyId, req.query.userId)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getPlayerPendingOrders = async function (req, res) {
  const username = req.params.username
  console.log(username)
  try {
    const results = await orderRepository.getPlayerPendingOrders(username)
    console.log('pending', results)
    // if (results.player.PlayerCompetition[0]) { }
    res.json(results).status(200)
  } catch (error) {
    res.json(error).status(500)
  }
}

exports.getPlayerCompleteOrders = async function (req, res) {
  const username = req.params.username
  console.log(username)
  try {
    const results = await orderRepository.getPlayerCompletedOrders(username)
    console.log(results)
    // if (results.player.PlayerCompetition[0]) { }
    res.json(results).status(200)
  } catch (error) {
    res.json(error).status(500)
  }
}

exports.cancelOrder = async function (req, res) {
  const id = req.params.id

  try {
    const results = await orderRepository.cancelOrder(id)
    if (results != null) {
      res.json(results).status(200)
    } else {
      res.json('This order can\'t be canceled').status(400)
    }
  } catch (error) {
    res.json(error).status(500)
  }
}

exports.testMatchOrders = async function (req, res) {
  try {
    const results = await orderRepository.matchOrders(1)


    res.json(results)

  } catch (error) {
    res.json(error.message).status(500)
  }


}
