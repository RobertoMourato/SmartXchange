'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.hasMany(models.Stock, { foreignKey: 'companyId' })
      this.hasMany(models.Answer, { foreignKey: 'companyId', as: 'answers' })
      this.hasMany(models.Order, { foreignKey: 'companyId', as: 'orders' })
      this.hasMany(models.Evaluation, { foreignKey: 'companyId' })
      this.hasMany(models.StockValue, { foreignKey: 'companyId' })
      this.belongsTo(models.PlayerCompetition, { foreignKey: 'playerCompetitionId' })
    }
  };
  Company.init({
    playerCompetitionId: DataTypes.INTEGER,
    companyName: DataTypes.STRING,
    companyWebsiteURL: DataTypes.STRING,
    companyShortPitch: DataTypes.STRING,
    companyCurrentStockPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company'
  })
  return Company
}
