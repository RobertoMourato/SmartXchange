'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tenantId: {
        references:{
          model: {
            tableName: 'tenants'
          },
          key: 'id',
          allowNull: false
        },
        type: Sequelize.INTEGER
      },
      managerId: {
        allowNull: true,
        references:{
          model: {
            tableName: 'users'
          },
          key: 'id',
        },
        type: Sequelize.INTEGER,
        onDelete:'SET NULL'
      },
      name: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique:true
      },
      password: {
        type: Sequelize.STRING
      },
      userTypeId: {
        references:{
          model: {
            tableName: 'usertypes'
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
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};