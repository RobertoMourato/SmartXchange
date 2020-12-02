'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('StockValues', [{
      stockId: '1',
      stockValue: '20',
      stockValueDate: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StockValues', null, {})
  }
}
