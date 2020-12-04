'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class StockValue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.Stock, { foreignKey: 'stockId' })
    }
  };
  StockValue.init({
    stockId: DataTypes.INTEGER,
    stockValue: DataTypes.INTEGER,
    stockValueDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'StockValue'
  })
  return StockValue
}
