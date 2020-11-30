'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      this.belongsTo(models.Competition, { foreignKey: 'competitionId', as: 'competition' })
    }
  };
  Question.init({
    questionText: DataTypes.STRING,
    order: DataTypes.INTEGER,
    competitionId: DataTypes.INTEGER,
    isSelected: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Question'
  })
  return Question
}
