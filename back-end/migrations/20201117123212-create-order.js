'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyId: {
        allowNull: false,
        references: {
          model: {
            tableName: 'Companies'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      playerId: {
        allowNull: false,references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        type: Sequelize.INTEGER
      },
      orderNumStock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      orderValue: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      orderDate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      orderType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      orderStatus: {
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
    await queryInterface.dropTable('Orders');
  }
};