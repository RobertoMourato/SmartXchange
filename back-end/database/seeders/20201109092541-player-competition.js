'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('PlayerCompetitions', [{
      playerId: 2,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 3,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 4,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 5,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 6,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 7,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 8,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 9,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 10,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 11,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 12,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 13,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 14,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 15,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 16,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 17,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 18,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 19,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 20,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      playerId: 21,
      competitionId: 1,
      completedRegistration: true,
      wallet: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
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
