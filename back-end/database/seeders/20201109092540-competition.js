'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Competitions', [{
      managerId: '1',
      competitionStartDate: '2020-11-09',
      competitionEndDate: '2020-11-10',
      competitionMarketOpening: '10:00',
      competitionMarketEnding: '16:00',
      competitionInitialBudget: '1000',
      competitionInitialStockValue: '30',
      competitionRefreshRate: '1:00',
      competitionNumStocks: '100',
      competitionHasStarted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Competitions', null, {})
  }
}
