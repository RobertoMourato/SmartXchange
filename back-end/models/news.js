'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.Competition, { foreignKey: 'competitionId' })
      this.belongsTo(models.User, { foreignKey: 'userId' })
    }
  };
  News.init({
    competitionId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    newsTitle: DataTypes.STRING,
    newsContent: DataTypes.STRING,
    newsType: DataTypes.STRING,
    newsDate: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News'
  })
  return News
}
