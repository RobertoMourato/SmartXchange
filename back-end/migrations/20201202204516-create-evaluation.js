'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Evaluations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      managerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      companyId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'companies'
          },
          key: 'id'
        }
      },
      evaluationType: {
        allowNull: false,
        type: Sequelize.STRING
      },
      evaluationContent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      evaluationDate: {
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Evaluations');
  }
};