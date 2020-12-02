const models = require('../models')

module.exports = {
  async index (req, res) {
    const stockExchange = models.StockExchange
    await stockExchange.findAll().then(stockExchange => {
      res.status(200).json(stockExchange)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async addStockExchange (req, res) {
    const company = await models.Company.findByPk(req.query.companyId)
    const buyOrder = await models.Order.findOne({
      where: {
        companyId: company.dataValues.id,
        orderType: 'Buy'
      }
    })
    const sellOrder = await models.Order.findOne({
      where: {
        companyId: company.dataValues.id,
        orderType: 'Sell'
      }
    })
    const stock = await models.Stock.findByPk(req.query.stockId)

    if (buyOrder && sellOrder && stock && company) {
      try {
        console.log('aqui')
        const buyOrderId = buyOrder.dataValues.id
        const sellOrderId = sellOrder.dataValues.id
        const stockId = stock.dataValues.id
        const stockExchange = await models.StockExchange.create({
          buyOrderId: buyOrderId,
          sellOrderId: sellOrderId,
          stockId: stockId
        })
        res.status(200).json(stockExchange)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No Orders or Stock associated')
    }
  }
}
