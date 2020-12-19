'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StockValues', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stockId: {
        allowNull: false,
        references: {
          model: {
            tableName: 'Stocks'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      stockValue: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      stockValueDate: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('StockValues')
  }
}
