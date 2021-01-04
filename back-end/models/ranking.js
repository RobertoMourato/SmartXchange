'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Ranking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.PlayerCompetition, { foreignKey: 'playerCompetitionId' })
    }
  };
  Ranking.init({
    playerCompetitionId: DataTypes.INTEGER,
    rankingPosition: DataTypes.INTEGER,
    rankingType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ranking'
  })
  return Ranking
}
