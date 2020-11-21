const { addStockExchange } = require('../controllers/stockExchangeController.js');
const { response } = require('../index.js');
const models = require('../models');

module.exports = {
    async index(req, res) {
      var stockExchange = models.StockExchange;
      await stockExchange.findAll().then(stockExchange => {
        res.status(200).json(stockExchange)
      })
        .catch(error => {
          res.status(400).send(error)
        })
  
    },
    async addStockExchange(req, res) {
        const company = await models.Company.findByPk(req.query.companyId)
        const buyOrder = await models.Order.findOne({
                                                    where: {
                                                        companyId: company.dataValues.id,
                                                        orderType: 'Buy'
                                                        },
                                                    });
        const sellOrder = await models.Order.findOne({
                                                    where: {
                                                        companyId: company.dataValues.id,
                                                        orderType: 'Sell'
                                                        },
                                                    });
        const stock = await models.Stock.findByPk(req.query.stockId);
    
        if (buyOrder && sellOrder && stock && company) {
          try {
              
            console.log("aqui");
            const buyOrder_Id = buyOrder.dataValues.id
            const sellOrder_Id = sellOrder.dataValues.id
            const stock_Id = stock.dataValues.id
            const stockExchange = await models.StockExchange.create({buyOrderId:buyOrder_Id, 
                                                                    sellOrderId:sellOrder_Id,
                                                                    stockId:stock_Id})
            res.status(200).json(stockExchange)
          } catch (error) {
            res.status(400).json(error)
          }
        } else {
          res.status(400).json("No Orders or Stock associated");
        }
    
      }
}