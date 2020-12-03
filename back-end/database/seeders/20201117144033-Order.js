'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* since orders are made in game there is no need to
    populate it table */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {})
  }
}
