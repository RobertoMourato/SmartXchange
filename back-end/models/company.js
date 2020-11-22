'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.PlayerCompetition, {foreignKey:'playerCompetitionId'});
    }
  };
  Company.init({
    playerCompetitionId: DataTypes.INTEGER,
    companyName: DataTypes.STRING,
    companyValuePropositions: DataTypes.STRING,
    companyCostumerSegments: DataTypes.STRING,
    companyCostumerRelationships: DataTypes.STRING,
    companyChannels: DataTypes.STRING,
    companyCostStructure: DataTypes.STRING,
    companyKeyPartners: DataTypes.STRING,
    companyKeyResources: DataTypes.STRING,
    companyWebsiteURL: DataTypes.STRING,
    companyShortPitch: DataTypes.STRING,
    companyCurrentStockPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};