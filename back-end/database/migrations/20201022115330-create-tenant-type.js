'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TenantTypes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenantType: {
        unique: true,
        type: Sequelize.STRING
      },
      isManager: {
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
    await queryInterface.dropTable('TenantTypes')
  }
}

/*
uuid: {
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV1,
  primaryKey: true
} */
