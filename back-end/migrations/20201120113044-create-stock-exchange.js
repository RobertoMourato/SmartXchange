'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StockExchanges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      buyOrderId: {
        references: {
          model: {
            tableName: 'Orders'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      sellOrderId: {
        references: {
          model: {
            tableName: 'Orders'
          },
          key: 'id'
        },
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
    await queryInterface.dropTable('StockExchanges')
  }
}
