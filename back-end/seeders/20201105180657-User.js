'use strict'

const bcrypt = require('bcryptjs')
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const salt = bcrypt.genSaltSync()

    return queryInterface.bulkInsert('Users', [{
      tenantId: '2',
      managerId: null,
      name: 'Vinicius Furlan',
      username: 'mr.furlan98',
      email: 'mr.furlan98@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '3', // manager
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Murilo Couceiro',
      username: 'mmc30',
      email: 'mmc30@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      tenantId: '2',
      managerId: '1',
      name: 'Lucas Stein',
      username: 'lucasS',
      email: 'stein@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
