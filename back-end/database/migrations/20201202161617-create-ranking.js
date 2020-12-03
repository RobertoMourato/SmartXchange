'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Rankings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      playerCompetitionId: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'PlayerCompetitions'
          },
          key: 'id'
        }
      },
      rankingPosition: {
        type: Sequelize.INTEGER
      },
      rankingType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Rankings');
  }
};