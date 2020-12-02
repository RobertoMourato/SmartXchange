'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PlayerCompetition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Competition, {foreignKey:'competitionId'});
      this.belongsTo(models.User, {foreignKey:'playerId'});
      this.hasOne(models.Company, {foreignKey:'playerCompetitionId'});
      this.hasmany(models.Ranking, {foreignKey:'playerCompetitionId'});

      //this.hasMany(models.Order, {foreignKey:'playerId'});
    }
  };
  PlayerCompetition.init({
    playerId: DataTypes.INTEGER,
    competitionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PlayerCompetition',
  });
  return PlayerCompetition;
};