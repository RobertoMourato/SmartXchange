const models = require('../models')

module.exports = {
  async index (req, res) {
    const order = models.Order
    await order.findAll().then(order => {
      res.status(200).json(order)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async addOrder (req, res) {
    // const tenant = await models.Tenant.findOne({ where: { tenant: req.body.id } });
    const company = await models.Company.findByPk(req.query.companyId)
    const user = await models.User.findByPk(req.query.userId)
    const {
      orderNumStock,
      orderValue,
      orderDate,
      orderType,
      orderStatus
    } = req.body

    if (company && user) {
      try {
        console.log('aqui')
        const companyId = company.dataValues.id
        const playerId = user.dataValues.id
        const order = await models.Order.create(
          {
            companyId: companyId,
            playerId: playerId,
            orderNumStock: orderNumStock,
            orderValue: orderValue,
            orderDate: orderDate,
            orderType: orderType,
            orderStatus: orderStatus
          })
        res.status(200).json(order)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No company or user associated')
    }
  }
}
