'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Evaluations', [{
      managerId: '1',
      companyId: '1',
      evaluationType: 'bla bla',
      evaluationContent: 'nice',
      evaluationDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Evaluations', null, {});
  }
};
