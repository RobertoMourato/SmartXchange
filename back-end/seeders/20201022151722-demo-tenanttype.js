'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TenantTypes', [{
      tenantType: 'SuperAdmin',
      createdAt: new Date(),
      updatedAt: new Date(),
      isManager: false
    },{
      tenantType: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date(),
      isManager: true
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TenantTypes', null, {});
  }
};
