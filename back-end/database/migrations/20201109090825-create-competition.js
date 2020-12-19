'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Competitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      managerId: {
        allowNull: true,
        references: {
          model: {
            tableName: 'Users'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL'
      },
      competitionStartDate: {
        type: Sequelize.DATE
      },
      competitionEndDate: {
        type: Sequelize.DATE
      },
      competitionMarketOpening: {
        type: Sequelize.TIME
      },
      competitionMarketEnding: {
        type: Sequelize.TIME
      },
      competitionInitialBudget: {
        type: Sequelize.INTEGER
      },
      competitionInitialStockValue: {
        type: Sequelize.INTEGER
      },
      competitionRefreshRate: {
        type: Sequelize.TIME
      },
      competitionNumStocks: {
        type: Sequelize.INTEGER
      },
      competitionHasStarted: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Competitions')
  }
}
