const stockRepository = require('../repository/stockRepository')

exports.getAllStocks = async function (req, res, next) {
  try {
    const results = await stockRepository.index(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.addStock = async function (req, res) {
  try {
    console.log(req.body)
    const results = await stockRepository.addStock(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getStocksOwned = async function (req, res) {
  try {
    const results = await stockRepository.getStocksOwned(req.query.userId, req.query.companyId)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.getAllStocksOwned = async function (req, res) {
  try {
    const results = await stockRepository.getAllStocksOwned(req.query.userId)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
