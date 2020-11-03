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
      this.belongsTo(models.Tenant,{foreignKey:'manager_Id'})
    }
  };
  Competition.init({
    competitionId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    competitionStartDate: DataTypes.DATE,
    competitionEndDate: DataTypes.DATE,
    competitionMarketOpening: DataTypes.TIME,
    competitionMarketEnding: DataTypes.TIME,
    competitionInitialBudget: DataTypes.INTEGER,
    competitionInitialStockValue: DataTypes.INTEGER,
    competitionRefreshRate: DataTypes.TIME,
    competitionNumStocks: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Competition',
  });
  return Competition;
};