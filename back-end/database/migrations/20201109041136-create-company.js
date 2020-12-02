'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerCompetitionId: {
        type: Sequelize.INTEGER
      },
      companyName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      companyValuePropositions: {
        type: Sequelize.STRING
      },
      companyCostumerSegments: {
        type: Sequelize.STRING
      },
      companyCostumerRelationships: {
        type: Sequelize.STRING
      },
      companyChannels: {
        type: Sequelize.STRING
      },
      companyCostStructure: {
        type: Sequelize.STRING
      },
      companyKeyPartners: {
        type: Sequelize.STRING
      },
      companyKeyResources: {
        type: Sequelize.STRING
      },
      companyWebsiteURL: {
        type: Sequelize.STRING
      },
      companyShortPitch: {
        type: Sequelize.STRING
      },
      companyCurrentStockPrice: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Companies');
  }
};