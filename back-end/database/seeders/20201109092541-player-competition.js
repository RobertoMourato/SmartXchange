'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PlayerCompetitions', [{
      playerId: 2,
      competitionId: 1,
      completedRegistration: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 3,
      competitionId: 1,
      completedRegistration: true,
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
