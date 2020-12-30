'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PlayerCompetitions', [{
      playerId: 2,
      competitionId: 1,
      completedRegistration: true,
      wallet: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 2,
      competitionId: 1,
      completedRegistration: true,
      wallet: 10000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
