'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserTypes', [{
      userType: 'Entrepreneur',
      createdAt: new Date(),
      updatedAt: new Date(),
      isEntrepreneur: true
    },{
      userType: 'Investor',
      createdAt: new Date(),
      updatedAt: new Date(),
      isEntrepreneur: false
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserTypes', null, {});
  }
};
