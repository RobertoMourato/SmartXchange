'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* since orders are made in game there is no need to
    populate this table if there is no Order */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('StockExchanges', null, {})
  }
}
