'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      invitedBy: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'tenants'
          },
          key: 'id'
        }
      },
      IsManager: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      competitionId: {
        /* references:{
          model: {
            tableName: 'competitions'
          },
          key: 'id'
        } */
        //IN case of userInvite CompetitionIdForeignKey
        type: Sequelize.INTEGER
      },
      isValid: {
        allowNull:false,
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Invites');
  }
};