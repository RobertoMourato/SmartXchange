'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Competition', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      managerId: {
        allowNull: false,
        references:{
          model: {
            tableName: 'tenants'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      playerId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      competitionStartDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      competitionEndDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      competitionMarketOpening: {
        allowNull: false,
        type: Sequelize.TIME
      },
      competitionMarketEnding: {
        allowNull: false,
        type: Sequelize.TIME
      },
      competitionInitialBudget: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      competitionInitialStockValue: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      competitionRefreshRate: {
        allowNull: false,
        type: Sequelize.TIME
      },
      competitionNumStocks: {
        allowNull: false,
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
    await queryInterface.dropTable('Competition');
  }
};