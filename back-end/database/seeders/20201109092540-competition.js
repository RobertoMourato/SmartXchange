'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Competitions', [{
      managerId: '1',
      competitionStartDate: '2021-01-05 12:00:00',
      competitionEndDate: '2021-01-05 14:00:00',
      competitionMarketOpening: '12:00:00',
      competitionMarketEnding: '14:00:00',
      competitionInitialBudget: '100',
      competitionInitialStockValue: '10',
      competitionRefreshRate: '00:01:00',
      competitionNumStocks: '50',
      competitionHasStarted: false,
      competitionHasFinished: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Competitions', null, {})
  }
}
