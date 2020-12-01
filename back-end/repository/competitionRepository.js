const { response } = require('../index.js');
const models = require('../models');
const tenantTypeRepository = require('./tenantTypeRepository.js');

module.exports = {
  async index(req, res) {
    var competition = models.Competition;
    await competition.findAll().then(competitions => {
      res.status(200).json(competitions)
    })
      .catch(error => {
        res.status(400).send(error)
      })

  },

  async getById(id){
    const competition = await models.Competition.findByPk(id);

    return  models.Competition.build(competition.dataValues);
  },

  async addCompetition(req, res) {

    //const tenant = await models.Tenant.findOne({ where: { tenant: req.body.id } });
    const manager = await models.User.findByPk(req.body.managerId);
    const {competitionStartDate, competitionEndDate, competitionMarketOpening ,
        competitionMarketEnding, competitionInitialBudget, competitionInitialStockValue,
        competitionRefreshRate, competitionNumStocks} = req.body

    if (manager) {
      try {
        console.log("aqui");
        const manager_Id = manager.dataValues.id
        console.log(manager_Id)
        const competition = await models.Competition.create({managerId:manager_Id, competitionStartDate:competitionStartDate, 
            competitionEndDate:competitionEndDate, competitionMarketOpening:competitionMarketOpening,
            competitionMarketEnding:competitionMarketEnding, competitionInitialBudget:competitionInitialBudget, competitionInitialStockValue:competitionInitialStockValue,
            competitionRefreshRate:competitionRefreshRate, competitionNumStocks:competitionNumStocks , competitionHasStarted:false})
        res.status(200).json(competition)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json("No Tenant associated");
    }

  },

  async toggleCompetition(req, res) {
    console.log(req.query)
    const comp = await models.Competition.findByPk(req.query.id);
    console.log(comp);
    if (comp) {
      try {
        if(comp.competitionHasStarted==0){
          models.Competition.update(
            {competitionHasStarted: true},
            {returning: true, where: {id: req.query.id}}
          )
        }else{
          models.Competition.update(
            {competitionHasStarted: false},
            {returning: true, where: {id: req.query.id}}
          )
        }
        res.status(200).json(competition)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json("No competition associated");
    }
  },

  async changeSettingsCompetition(req, res) {
    console.log(req.query)
    const comp = await models.Competition.findByPk(req.query.id);
    const {competitionStartDate, competitionEndDate, competitionMarketOpening ,
      competitionMarketEnding, competitionInitialBudget, competitionInitialStockValue,
      competitionRefreshRate, competitionNumStocks} = req.body
    if (comp) {
      try {
        models.Competition.update(
          {competitionStartDate:competitionStartDate, 
            competitionEndDate:competitionEndDate, competitionMarketOpening:competitionMarketOpening,
            competitionMarketEnding:competitionMarketEnding, competitionInitialBudget:competitionInitialBudget, 
            competitionInitialStockValue:competitionInitialStockValue,competitionRefreshRate:competitionRefreshRate, 
            competitionNumStocks:competitionNumStocks},
          {returning: true, where: {id: req.query.id}}
        )
        res.status(200).json(competition)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json("No competition associated");
    }
  }
}