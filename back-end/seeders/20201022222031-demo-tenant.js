'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tenants', [{
      name: 'John Joe',
      username: 'John1Administrator',
      email: 'john@gmail.com',
      password: 'password',
      tenanttype_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Vinicius Furlan',
      username: 'mr.furlan98',
      email: 'mr.furlan98@gmail.com',
      password: '12345',
      tenanttype_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tenants', null, {})
  }
}
