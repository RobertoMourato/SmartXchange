'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Stocks', [{
      companyId: '1',
      playerId: '2',
      stockLastExchange: new Date(),
      stockValue: '20',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stocks', null, {})
  }
}
