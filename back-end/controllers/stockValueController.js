const stockValueRepository = require('../repository/stockValueRepository')

exports.getAllStocksValues = async function (req, res, next) {
  try {
    const results = await stockValueRepository.index(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}

exports.addStockValue = async function (req, res) {
  try {
    console.log(req.body)
    const results = await stockValueRepository.addStockValue(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
  }
}
