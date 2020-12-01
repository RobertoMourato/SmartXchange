const stockExchangeRepository = require('../repository/stockExchangeRepository')

exports.getAllStockExchanges = async function (req, res, next) {
  try {
    const results = await stockExchangeRepository.index(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.addStockExchange = async function (req, res) {
  try {
    console.log(req.body)
    const results = await stockExchangeRepository.addStockExchange(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
