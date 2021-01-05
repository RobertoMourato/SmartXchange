'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i=1;i<=10;i++){
      await queryInterface.bulkInsert('StockValues', [{
        companyId: i,
        stockValue: '10',
        stockValueDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }])
    }
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StockValues', null, {})
  }
}
