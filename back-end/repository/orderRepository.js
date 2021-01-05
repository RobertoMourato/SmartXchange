const models = require('../models')
const Sequelize = require('sequelize')

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
    const body = req.body
    // const tenant = await models.Tenant.findOne({ where: { tenant: req.body.id } });
    const company = await models.Company.findByPk(body.companyId)
    const user = await models.User.findByPk(body.playerId)
    if (company && user) {
      return await models.Order.create(
        {
          companyId: body.companyId,
          playerId: body.playerId,
          orderNumStock: body.orderNumStock,
          orderValue: body.orderValue,
          orderDate: body.orderDate,
          orderType: body.orderType,
          orderStatus: body.orderStatus
        })
    } else {
      return false
    }
  },

  async getMyOrders (companyId, userId) {
    return await models.Order.findAll({
      where: { companyId: companyId, playerId: userId }
    })
  },

  async getAllMyOrders (userId) {
    return await models.Order.findAll({
      where: { playerId: userId }
    })
  },

  async getPlayerPendingOrders (username) {
    return await models.Order.findAll({
      where: { orderStatus: 'Pending' },
      include: [
        {
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

  async getPlayerPartiallyMatchedOrders (userId, competitionId) {
    console.log('getPartial', userId, competitionId)
    const orders = await models.Order.findAll({
      where: { orderStatus: 'Partially Matched' },
      include: [
        {
          required: true,
          model: models.StockExchange,
          as: 'buyExchanges'
        }, {
          model: models.Company

        },
        {
          model: models.User,
          where: { id: userId },
          as: 'player',
          include: [{
            model: models.PlayerCompetition,
            required: true,
            include: {
              model: models.Competition,
              where: { id: competitionId }
            }
          }]
        }]

    })

    if (orders) {
      return orders
    } else {
      return await models.Order.findAll({
        where: { orderStatus: 'Partially Matched' },
        include: [
          {
            required: true,
            model: models.StockExchange,
            as: 'sellExchanges'
          }, {
            model: models.Company
          },
          {
            model: models.User,
            where: { id: userId },
            as: 'player',
            include: [{
              model: models.PlayerCompetition,
              required: true,
              include: {
                model: models.Competition,
                where: { id: competitionId }
              }
            }]
          }]
      })
    }
  },
  async cancelOrder (orderId) {
    
    try {
      const wallet = await models.PlayerCompetition.findOne({ where: { playerId: sellerId, competitionId: competitionId } })
      const order = await models.Order.findByPk(orderId)
      if (wallet) {
        await wallet.increment('wallet', { by: order.orderNumStock * order.orderValue });
      }
      return models.Order.update(
        { orderStatus: 'Canceled' },
        { where: { id: orderId, orderStatus: 'Pending' } }
      )
    } catch (error) {
      return null
    }
  },

  async matchOrders (competitionId) {
    const maps = await this.getOrders(competitionId)
    // console.log('maps', maps)
    const buyMap = maps.buyMap
    const sellMap = maps.sellMap
    if (buyMap !== undefined && sellMap !== undefined) {
      console.log('buy', maps.buyMap)
      console.log('sell', maps.sellMap)

      for (const companyId of maps.buyMap.keys()) {
        // console.log(companyId)
        // await buyMap.get(companyId).forOf(async buyOrder => {
        let maxCompanyValue = 0;
        for (const buyOrder of buyMap.get(companyId)) {
          if (buyOrder.orderNumStock > 0) {
            // console.log('temp', buyOrder)
           // await sellMap.get(companyId).for(async sellOrder => {
            for (const sellOrder of sellMap.get(companyId)) {
              console.log(buyOrder.id, ' - ', sellOrder.id)
              if (buyOrder.orderValue > maxCompanyValue) {
                maxCompanyValue = buyOrder.orderValue
              }
              if (buyOrder.orderValue >= sellOrder.orderValue && sellOrder.orderNumStock > 0) {
                if (buyOrder.orderNumStock > sellOrder.orderNumStock) {
                  console.log('>')
                  // create stock exchanges, update wallet, update stocks
                  await this.exchangeStocks(buyOrder.id, sellOrder.id, sellOrder.orderNumStock, buyOrder.orderValue, 
                                            buyOrder.playerId, sellOrder.playerId, companyId, competitionId)
                  // complete sellorder bd
                  await this.completeOrder(sellOrder.id)
                  await this.updateToPartiallyMatched(buyOrder.id)
                  // atualiza local numStock, next sell order
                  buyOrder.orderNumStock = buyOrder.orderNumStock - sellOrder.orderNumStock
                  sellOrder.orderNumStock = 0
                } else {
                  if (buyOrder.orderNumStock === sellOrder.orderNumStock) {
                    console.log('=')
                    // create stock exchanges, update wallet, update stocks
                    await this.exchangeStocks(buyOrder.id, sellOrder.id, sellOrder.orderNumStock, buyOrder.orderValue, 
                                              buyOrder.playerId, sellOrder.playerId, companyId, competitionId)
                    // complete both order
                    await this.completeOrder(sellOrder.id)
                    await this.completeOrder(buyOrder.id)
                    // retira as orders do map
                    sellOrder.orderNumStock = 0
                    buyOrder.orderNumStock = 0
                    break;
                    // vai para a próxima buyOrder
                  } else {
                    // buy order stocks < sell order stocks
                    console.log('<')
                    // create stock exchanges, update wallet, update stocks
                    await this.exchangeStocks(buyOrder.id, sellOrder.id, buyOrder.orderNumStock, buyOrder.orderValue, 
                                              buyOrder.playerId, sellOrder.playerId, companyId, competitionId)
                    // complete purchase order bd
                    await this.completeOrder(buyOrder.id)
                    await this.updateToPartiallyMatched(sellOrder.id)
                    sellOrder.orderNumStock = sellOrder.orderNumStock - buyOrder.orderNumStock
                    buyOrder.orderNumStock = 0
                    break;
                    // vai para a proxima buyOrder
                  }
                }
              }
            }
          }
        }
        await this.changeCompanyMaxStockValue(companyId, maxCompanyValue)

        //assert das PartiallyMatched - cria orders novas para o novo match das orders que faltam 
        await this.assertPartiallyMatched(buyMap.get(companyId), sellMap.get(companyId))
      }
    }
    // console.log('buyMap - after', buyMap)
    // console.log('sellMap -sell', sellMap)
  },

  async getOrders (competitionId) {
    const buyMap = new Map()
    const sellMap = new Map()

    const buyOrders = await models.Order.findAll({
      where: { orderStatus: 'Pending', orderType: 'Buy' },
      order: [['orderValue', 'DESC']],
      include: {
        model: models.Company,
        include: {
          model: models.PlayerCompetition,
          where: { competitionId: competitionId }
        }
      }
    })
    const sellOrders = await models.Order.findAll({
      where: { orderStatus: 'Pending', orderType: 'Sell' },
      order: [['orderValue', 'ASC']],
      include: {
        model: models.Company,
        include: {
          model: models.PlayerCompetition,
          where: { competitionId: competitionId }
        }
      }
    })

    buyOrders.forEach((order) => {
      const element = order.dataValues

      // buyOrders
      const companyOrders = buyMap.get(element.companyId)
      if (companyOrders !== undefined) {
        const order = models.Order.build(element)
        companyOrders.push(order.dataValues)
        buyMap.set(element.companyId, companyOrders)
      } else {
        const order = models.Order.build(element)
        // console.log('build', order.dataValues)
        const arr = []
        arr.push(order.dataValues)
        buyMap.set(element.companyId, arr)
      }
    })
    sellOrders.forEach((order) => {
      const element = order.dataValues
      // SellOrders
      const companyOrders = sellMap.get(element.companyId)
      if (companyOrders !== undefined) {
        const order = models.Order.build(element)
        companyOrders.push(order.dataValues)
        sellMap.set(element.companyId, companyOrders)
      } else {
        const order = models.Order.build(element)
        // console.log('build', order.dataValues)
        const arr = []
        arr.push(order.dataValues)
        sellMap.set(element.companyId, arr)
      }

      // console.log(buyMap, sellMap)
    })

    return { buyMap, sellMap }
  },

  async exchangeStocks (buyOrderId, sellOrderId, orderNumStock, orderValue, buyerId, sellerId, companyId, competitionId) {
    console.log(buyOrderId, ' player', buyerId, ' buys ', sellOrderId, ' player', sellerId, ' n stocks=', orderNumStock)
    // create stock exchanges, update wallet, update stocks
    const payment = orderNumStock * orderValue
    const stocks = await models.Stock.findAll({ where: { playerId: sellerId, companyId: companyId }, limit: orderNumStock })

    // console.log('available',stocks)

    await stocks.forEach(async element => {
      const stock = element.dataValues
      console.log('stock- ', stock.id)
      await models.Stock.update({
        playerId: buyerId
      },
      {
        where: { id: stock.id }
      }
      )
      console.log('updated', stock.id)

      await models.StockExchange.create({
        buyOrderId: buyOrderId,
        sellOrderId: sellOrderId,
        stockId: stock.id
      })
    })

    await models.PlayerCompetition.update({
      wallet: Sequelize.literal('wallet -' + payment)
    }, {
      where: { id: buyerId }
    })

    // firstOrders (when competition starts) playerId is null
    if (sellerId !== null) {
      await models.PlayerCompetition.update({
        wallet: Sequelize.literal('wallet +' + payment)
      }, {
        where: { id: sellerId }
      })
    }

    const wallet = await models.PlayerCompetition.findOne({ where: { playerId: sellerId, competitionId: competitionId } })
      if (wallet) {
        await wallet.increment('wallet', { by: payment });
      }
    // teste
    // const stocksF = await models.Stock.findAll();
    // console.log(stocksF)
  },
  async completeOrder (orderId) {
    try {
      return await models.Order.update(
        { orderStatus: 'Completed' },
        { where: { id: orderId } }
      )
    } catch (error) {
      return null
    }
  },
  async updateToPartiallyMatched (orderId) {
    try {
      return await models.Order.update(
        { orderStatus: 'Partially Matched' },
        { where: { id: orderId } }
      )
    } catch (error) {
      return null
    }
  },
  async changeCompanyMaxStockValue(companyId, maxCompanyValue) {
    try {
      await models.Company.update({
        currentStockPrice: maxCompanyValue
      },
        { where: { id: companyId } })

      await models.StockValue.create({
        companyId: companyId,
        stockValue: maxCompanyValue,
        stockValueDate: new Date()
      })
    } catch (error) {
      console.log(error.message)
    }
  },

  async assertPartiallyMatched(buyOrders, sellOrders) {
    for (const buyOrder of buyOrders) {
      if (buyOrder.orderStatus == 'Partially Matched') {
        await models.Order.create({
          companyId: buyOrder.companyId,
          playerId: buyOrder.playerId,
          orderNumStock: buyOrder.orderNumStock,
          orderValue: buyOrder.orderValue,
          orderDate: new Date(),
          orderType: 'Buy',
          orderStatus: 'Pending'
        })
      }
    }
    for (const sellOrder of sellOrders) {
      if (sellOrder.orderStatus == 'Partially Matched') {
        await models.Order.create({
          companyId: sellOrder.companyId,
          playerId: sellOrder.playerId,
          orderNumStock: sellOrder.orderNumStock,
          orderValue: sellOrder.orderValue,
          orderDate: new Date(),
          orderType: 'Sell',
          orderStatus: 'Pending'
        })
      }
    }
  }
}
