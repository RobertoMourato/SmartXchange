'use strict'

const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const salt = bcrypt.genSaltSync()
    return queryInterface.bulkInsert('Tenants', [{
      name: 'John Joe',
      username: 'John1Administrator',
      email: 'john@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      tenanttype_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Vinicius Furlan',
      username: 'mr.furlan',
      email: 'mr.furlan@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      tenanttype_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sharna Barber',
      username: 'sharny',
      email: 'sharnab@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      tenanttype_id: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tenants', null, {})
  }
}
