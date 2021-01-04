'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* since orders are made in game there is no need to
    populate it table */
    await queryInterface.bulkInsert('Orders', [{
      companyId: 1,
      playerId: 3,
      orderNumStock: 1,
      orderValue: 10,
      orderDate: new Date(),
      orderType: 'Buy',
      orderStatus: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      companyId: 1,
      playerId: 3,
      orderNumStock: 1,
      orderValue: 2,
      orderDate: new Date(),
      orderType: 'Buy',
      orderStatus: 'Pending',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {})
  }
}
