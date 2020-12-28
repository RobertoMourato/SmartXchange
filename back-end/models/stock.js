'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.Company, { foreignKey: 'companyId' })
      this.belongsTo(models.User, { foreignKey: 'playerId' })
      // this.hasMany(models.StockValue, { foreignKey: 'stockId' })
      this.hasMany(models.StockExchange, { foreignKey: 'stockId' })
    }
  };
  Stock.init({
    companyId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    stockLastExchange: DataTypes.DATE,
    stockValue: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock'
  })
  return Stock
}
