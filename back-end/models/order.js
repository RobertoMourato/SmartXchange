'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.User, { foreignKey: 'playerId', as: 'player' })
      this.hasMany(models.StockExchange, { foreignKey: 'buyOrderId' })
      this.hasMany(models.StockExchange, { foreignKey: 'sellOrderId' })
      this.belongsTo(models.Company, { foreignKey: 'companyId' })
    }
  };
  Order.init({
    companyId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    orderNumStock: DataTypes.INTEGER,
    orderValue: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    orderType: DataTypes.STRING,
    orderStatus: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order'
  })
  return Order
}
