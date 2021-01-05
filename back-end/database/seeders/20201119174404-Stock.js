'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    for(let i=1;i<=10;i++){
      for(let j=1;j<=50;j++){
        await queryInterface.bulkInsert('Stocks', [{
          companyId: i,
          playerId: null,
          stockLastExchange: new Date(),
          stockValue: '10',
          createdAt: new Date(),
          updatedAt: new Date()
        }])
      }
    } 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Stocks', null, {})
  }
}
