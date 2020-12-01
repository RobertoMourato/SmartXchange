'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Question, {foreignKey: 'questionId', as: 'question'})
      this.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
    }
  };
  Answer.init({
    questionId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    answerText: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};