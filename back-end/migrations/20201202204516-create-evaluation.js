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
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'users'
          },
          key: 'id'
        }
      },
      companyId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'companies'
          },
          key: 'id'
        }
      },
      evaluationType: {
        type: Sequelize.STRING
      },
      evaluationContent: {
        type: Sequelize.STRING
      },
      evaluationDate: {
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