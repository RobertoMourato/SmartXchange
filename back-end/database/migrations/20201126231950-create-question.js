'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      questionText: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      competitionId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Competitions'
          },
          key: 'id'
        }
      },
      isSelected: {
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
    await queryInterface.dropTable('Questions')
  }
}
