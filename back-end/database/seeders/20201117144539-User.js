'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      tenantId: '2',
      name: 'Vinicius Furlan',
      username: 'mr.furlan98',
      email: 'mr.furlan98@gmail.com',
      password: '12345',
      userTypeId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
