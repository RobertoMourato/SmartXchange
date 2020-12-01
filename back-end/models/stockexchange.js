'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockExchange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Stock, {foreignKey:'stockId'})
      this.belongsTo(models.Order, {foreignKey:'buyOrderId'})
      this.belongsTo(models.Order, {foreignKey:'sellOrderId'})
    }
  };
  StockExchange.init({
    buyOrderId: DataTypes.INTEGER,
    sellOrderId: DataTypes.INTEGER,
    stockId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StockExchange',
  });
  return StockExchange;
};