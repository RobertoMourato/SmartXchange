'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /* since rankings are made in game there is no need to
    populate this table if there is no current game*/
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rankings', null, {});
  }
};
