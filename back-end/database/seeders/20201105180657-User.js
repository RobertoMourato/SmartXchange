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
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Karis Corbett',
      username: 'Kcorbett',
      email: 'Kcorbett@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Eshan Wilder',
      username: 'Ewilder',
      email: 'Ewilder@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Madeline Blundell',
      username: 'Mblundell',
      email: 'Mblundell@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Julian Rooney',
      username: 'Jrooney',
      email: 'Jrooney@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Cadi Villanueva',
      username: 'Cvillanueva',
      email: 'Cvillanueva@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Amin Gonzalez',
      username: 'Agonzalez',
      email: 'Agonzalez@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Bertha Marquez',
      username: 'Bmarquez',
      email: 'Bmarquez@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Clare Hoover',
      username: 'Choover',
      email: 'Choover@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Stephen Mcgrath',
      username: 'Smcgrath',
      email: 'Smcgrath@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '1', // Entrepreneur
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Bethanie Blankenship',
      username: 'Bblankenship',
      email: 'Bblankenship@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Chloe-Ann Adam',
      username: 'Caadam',
      email: 'Caadam@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Nannie Kinney',
      username: 'Nkinney',
      email: 'Nkinney@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Fabien Solomon',
      username: 'Fsolomon',
      email: 'Fsolomon@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Jay-Jay Glenn',
      username: 'Jjglenn',
      email: 'Jjglenn@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Lacie-Mae Noel',
      username: 'Lmnoel',
      email: 'Lmnoel@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Inaayah Howells',
      username: 'Ihowells',
      email: 'Ihowells@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Ian Faulkner',
      username: 'Ifaulkner',
      email: 'Ifaulkner@gmail.com',
      password: bcrypt.hashSync('1234', salt),
      userTypeId: '2', // Investor
      createdAt: new Date(),
      updatedAt: new Date()
    }, {

      tenantId: '2',
      managerId: '1',
      name: 'Genevieve Hammond',
      username: 'Ghammond',
      email: 'Ghammond@gmail.com',
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
