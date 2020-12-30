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
  },

  async getPlayerPendingOrders (username) {
    return await models.Order.findAll({
      where: { orderStatus: 'Pending' },
      include: [{
        model: models.Company
      }, {
        model: models.User,
        where: { username: username },
        as: 'player',
        required: true,
        include: {
          model: models.PlayerCompetition,
          required: true,
          include: {
            model: models.Competition,
            required: true,
            where: { competitionHasStarted: true, competitionHasFinished: false }
          }
        }
      }]
    })
  },
  async getPlayerCompletedOrders (username) {
    console.log('completed')
    return await models.Order.findAll({
      where: { orderStatus: 'Completed' },
      include: [{
        model: models.Company
      },
      {
        model: models.User,
        where: { username: username },
        as: 'player',
        include: {
          model: models.PlayerCompetition,
          required: true,
          include: {
            model: models.Competition,
            required: true,
            where: { competitionHasStarted: true, competitionHasFinished: false }
          }
        }
      }]
    })

    /* return await models.Order.findAll({
       include: ['company']
     }) */
  },

  async cancelOrder (orderId) {
    try {
      return models.Order.update(
        { orderStatus: 'Canceled' },
        { where: { id: orderId, orderStatus: 'Pending' } }
      )
    } catch (error) {
      return null
    }
  }

  /* async getPlayerPendingOrders(playerId) {
     return await models.User.findOne({
       where: { id: playerId },
       include: [{
         model: models.PlayerCompetition,
         include: {
           model: models.Competition,
           where: { competitionHasStarted: true, competitionHasFinished: false }
         }
       },
       { model: models.Order }]
     })
 } */
}
