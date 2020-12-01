'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Competition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Tenant, {foreignKey:'managerId'})
    }
  };
  Competition.init({
    managerId: DataTypes.INTEGER,
    competitionStartDate: DataTypes.DATE,
    competitionEndDate: DataTypes.DATE,
    competitionMarketOpening: DataTypes.TIME,
    competitionMarketEnding: DataTypes.TIME,
    competitionInitialBudget: DataTypes.INTEGER,
    competitionInitialStockValue: DataTypes.INTEGER,
    competitionRefreshRate: DataTypes.TIME,
    competitionNumStocks: DataTypes.INTEGER,
    competitionHasStarted: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Competition',
  });
  return Competition;
};