'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evaluation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Company, {foreignKey:'companyId'});
      this.belongsTo(models.User, {foreignKey:'managerId'});
    }
  };
  Evaluation.init({
    managerId: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    evaluationType: DataTypes.STRING,
    evaluationContent: DataTypes.STRING,
    evaluationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Evaluation',
  });
  return Evaluation;
};