'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserTypes', [{
      userType: 'Entrepreneur',
      createdAt: new Date(),
      updatedAt: new Date(),
      isManager: false
    },{
      userType: 'Investor',
      createdAt: new Date(),
      updatedAt: new Date(),
      isManager: false
    },{
      userType: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date(),
      isManager: true
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserTypes', null, {});
  }
};
/*,{
      userType: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date(),
      isManager: true
    }*/ 