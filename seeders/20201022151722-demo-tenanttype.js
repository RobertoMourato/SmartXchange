'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TenantTypes', [{
      tenantType: 'SuperAdmin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      tenantType: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TenantTypes', null, {});
  }
};
