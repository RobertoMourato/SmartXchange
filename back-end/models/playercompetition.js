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
      // define association here
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