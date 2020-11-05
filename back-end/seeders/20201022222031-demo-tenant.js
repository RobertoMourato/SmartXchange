'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tenants', [{
      name: 'John Joe',
      username: 'John1Administrator',
      email: 'john@gmail.com',
      password: 'password',
      tenanttype_id: '2', 
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tenants', null, {});
  }
};
