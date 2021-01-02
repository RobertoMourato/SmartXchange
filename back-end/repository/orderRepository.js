const { buyMap } = require('..')
const models = require('../models')
const company = require('../models/company')
const stockValueRepository = require('./stockValueRepository')
const Sequelize = require('sequelize')

module.exports = {
  async index(req, res) {
    const order = models.Order
    await order.findAll().then(order => {
      res.status(200).json(order)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async addOrder(req, res) {
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

  async getPlayerPendingOrders(username) {
    return await models.Order.findAll({
      where: { orderStatus: 'Pending' },
      include: ['company', {
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
  async getPlayerCompletedOrders(username) {
    return await models.Order.findAll({
      where: { orderStatus: 'Completed' },
      include: [
        'company',
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

  async cancelOrder(orderId) {
    try {
      return models.Order.update(
        { orderStatus: 'Canceled' },
        { where: { id: orderId, orderStatus: 'Pending' } }
      )
    } catch (error) {
      return null
    }
  },

  async matchOrders(competitionId) {
    const maps = await this.getOrders(competitionId)
    //console.log('maps', maps)
    let buyMap = maps.buyMap
    let sellMap = maps.sellMap
    if (buyMap != undefined && sellMap != undefined) {
      console.log('buy', maps.buyMap)
      console.log('sell', maps.sellMap)

      for (let companyId of maps.buyMap.keys()) {
        //console.log(companyId)
        await buyMap.get(companyId).forEach(async buyOrder => {
          if (buyOrder.orderNumStock > 0) {
            //console.log('temp', buyOrder)
            await sellMap.get(companyId).forEach(async sellOrder => {
              console.log(buyOrder.id, ' - ', sellOrder.id)
              if (buyOrder.orderValue >= sellOrder.orderValue && sellOrder.orderNumStock > 0) {
                if (buyOrder.orderNumStock > sellOrder.orderNumStock) {
                  console.log('>')
                  //create stock exchanges, update wallet, update stocks 
                  await this.exchangeStocks(buyOrder.id, sellOrder.id, sellOrder.orderNumStock, buyOrder.orderValue, buyOrder.playerId, sellOrder.playerId, companyId)
                  //complete sellorder bd
                  await this.completeOrder(sellOrder.id)
                  await this.updateToPartiallyMatched(buyOrder.id)
                  // atualiza local numStock, next sell order
                  buyOrder.orderNumStock = buyOrder.orderNumStock - sellOrder.orderNumStock
                  sellOrder.orderNumStock = 0;
                } else {
                  if (buyOrder.orderNumStock == sellOrder.orderNumStock) {
                    console.log('=')
                    //create stock exchanges, update wallet, update stocks 
                    await this.exchangeStocks(buyOrder.id, sellOrder.id, sellOrder.orderNumStock, buyOrder.orderValue, buyOrder.playerId, sellOrder.playerId, companyId)
                    //complete both order
                    await this.completeOrder(sellOrder.id)
                    await this.completeOrder(buyOrder.id)
                    //retira as orders do map
                    sellOrder.orderNumStock = 0
                    buyOrder.orderNumStock = 0
                    return; //vai para a próxima buyOrder
                  } else {
                    //buy order stocks < sell order stocks 
                    console.log('<')
                    //create stock exchanges, update wallet, update stocks 
                    await this.exchangeStocks(buyOrder.id, sellOrder.id, buyOrder.orderNumStock, buyOrder.orderValue, buyOrder.playerId, sellOrder.playerId, companyId)
                    //complete purchase order bd
                    await this.completeOrder(buyOrder.id)
                    await this.updateToPartiallyMatched(sellOrder.id)
                    sellOrder.orderNumStock = sellOrder.orderNumStock - buyOrder.orderNumStock
                    buyOrder.orderNumStock = 0
                    return; //vai para a proxima buyOrder
                  }
                }
              }

            });
          }
        });
      }
    }
    //console.log('buyMap - after', buyMap)
    //console.log('sellMap -sell', sellMap)

  },


  async getOrders(competitionId) {

    const buyMap = new Map();
    const sellMap = new Map();

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

      //buyOrders
      let companyOrders = buyMap.get(element.companyId)
      if (companyOrders != undefined) {
        const order = models.Order.build(element)
        companyOrders.push(order.dataValues)
        buyMap.set(element.companyId, companyOrders)
      } else {
        const order = models.Order.build(element);
        // console.log('build', order.dataValues)
        let arr = []
        arr.push(order.dataValues)
        buyMap.set(element.companyId, arr)
      }


    });
    sellOrders.forEach((order) => {

      const element = order.dataValues
      //SellOrders
      let companyOrders = sellMap.get(element.companyId)
      if (companyOrders != undefined) {
        const order = models.Order.build(element)
        companyOrders.push(order.dataValues)
        sellMap.set(element.companyId, companyOrders)
      } else {
        const order = models.Order.build(element);
        //console.log('build', order.dataValues)
        let arr = []
        arr.push(order.dataValues)
        sellMap.set(element.companyId, arr)
      }

      // console.log(buyMap, sellMap)
    });


    return { buyMap, sellMap };
  },

  async exchangeStocks(buyOrderId, sellOrderId, orderNumStock, orderValue, buyerId, sellerId, companyId) {
    console.log(buyOrderId, ' player', buyerId, ' buys ', sellOrderId, ' player', sellerId, ' n stocks=', orderNumStock)
    //create stock exchanges, update wallet, update stocks
    const payment = orderNumStock * orderValue
    let stocks = await models.Stock.findAll({ where: { playerId: sellerId, companyId: companyId }, limit: orderNumStock })


    //console.log('available',stocks)

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
    });

    await models.PlayerCompetition.update({
      wallet: Sequelize.literal('wallet -' + payment)
    }, {
      where: { id: buyerId }
    })

    //firstOrders (when competition starts) playerId is null
    if (sellerId != null) {
      await models.PlayerCompetition.update({
        wallet: Sequelize.literal('wallet +' + payment)
      }, {
        where: { id: sellerId }
      })
    }
    //teste
    //const stocksF = await models.Stock.findAll();
    //console.log(stocksF)
  }
  ,
  async completeOrder(orderId) {
    try {
      return await models.Order.update(
        { orderStatus: 'Completed' },
        { where: { id: orderId } }
      )
    } catch (error) {
      return null
    }
  },
  async updateToPartiallyMatched(orderId) {
    try {
      return await models.Order.update(
        { orderStatus: 'Partially Matched' },
        { where: { id: orderId } }
      )
    } catch (error) {
      return null
    }
  }

}
