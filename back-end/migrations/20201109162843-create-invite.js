'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Invites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      token: {
        allowNull: false,
        type: Sequelize.STRING
      },
      invitedBy: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users'
          },
          key: 'id'
        },
        allowNull: false,
        onDelete: 'CASCADE'
      },
      IsManager: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      competitionId: {
        references: {
          model: {
            tableName: 'competitions'
          },
          key: 'id'
        },
        allowNull: true,
        type: Sequelize.INTEGER
      },
      isValid: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      email: {
        allowNull: false,
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
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Invites')
  }
}

/*
type: Sequelize.UUID,
        defaultValue: require('sequelize').UUIDV4, */
