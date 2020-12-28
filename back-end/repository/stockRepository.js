const models = require('../models')

module.exports = {
  async index (req, res) {
    const stock = models.Stock
    await stock.findAll().then(stock => {
      res.status(200).json(stock)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async addStock (req, res) {
    const company = await models.Company.findByPk(req.query.companyId)
    const user = await models.User.findByPk(req.query.playerId)
    const {
      stockLastExchange,
      stockValue
    } = req.body

    if (company && user) {
      try {
        console.log('aqui')
        const companyId = company.dataValues.id
        const playerId = user.dataValues.id
        const stock = await models.Stock.create({
          companyId: companyId,
          playerId: playerId,
          stockLastExchange: stockLastExchange,
          stockValue: stockValue
        })
        res.status(200).json(stock)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No company or user associated')
    }
  }
}