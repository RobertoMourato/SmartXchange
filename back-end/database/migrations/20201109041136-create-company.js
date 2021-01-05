'use strict'
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
        type: Sequelize.INTEGER,
        unique: true,
        references: {
          model: {
            tableName: 'PlayerCompetitions'
          },
          key: 'id'
        }
      },
      companyName: {
        allowNull: false,
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
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Companies')
  }
}
