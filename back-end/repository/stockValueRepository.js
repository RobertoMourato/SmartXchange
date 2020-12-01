const models = require('../models')

module.exports = {
  async index (req, res) {
    const stockValue = models.StockValue
    await stockValue.findAll().then(stockValue => {
      res.status(200).json(stockValue)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async addStockValue (req, res) {
    const stock = await models.Company.findByPk(req.query.stockId)
    const {
      stockValue,
      stockValueDate
    } = req.body

    if (stock) {
      try {
        console.log('aqui')
        const stockId = stock.dataValues.id
        const stockValues = await models.StockValue.create({
          stockId: stockId,
          stockValue: stockValue,
          stockValueDate: stockValueDate
        })
        res.status(200).json(stockValues)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No stock associated')
    }
  }
}
