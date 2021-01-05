'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Companies', [{
      playerCompetitionId: '1',
      companyName: 'FEUP',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      playerCompetitionId: '3',
      companyName: 'FAUP',
      createdAt: new Date(),
      updatedAt: new Date()
  },{
    playerCompetitionId: '4',
    companyName: 'FBAUP',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    playerCompetitionId: '5',
    companyName: 'FEUP',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    playerCompetitionId: '6',
    companyName: 'FCUP',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    playerCompetitionId: '7',
    companyName: 'FDUP',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    playerCompetitionId: '8',
    companyName: 'FFUP',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    playerCompetitionId: '9',
    companyName: 'FLUP',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    playerCompetitionId: '10',
    companyName: 'FMUP',
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    playerCompetitionId: '11',
    companyName: 'FEP',
    createdAt: new Date(),
    updatedAt: new Date()
  }
  ])},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Companies', null, {})
  }
}
