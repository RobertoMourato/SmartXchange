const models = require('../models')
const questionRepository = require('./questionRepository.js')
const inviteRepository = require('./inviteRepository')

module.exports = {
  async index (req, res) {
    const competition = models.Competition
    return competition.findAll()
  },

  async getById (id) {
    const competition = await models.Competition.findByPk(id)

    return models.Competition.build(competition.dataValues)
  },

  async addCompetition (req, res) {
    // const tenant = await models.Tenant.findOne({ where: { tenant: req.body.id } });
    const manager = await models.User.findByPk(req.body.managerId)
    const {
      competitionStartDate, competitionEndDate, competitionMarketOpening,
      competitionMarketEnding, competitionInitialBudget, competitionInitialStockValue,
      competitionRefreshRate, competitionNumStocks
    } = req.body

    if (manager) {
      try {
        console.log('aqui')
        const managerId = manager.dataValues.id
        console.log(managerId)
        const competition = await models.Competition.create({
          managerId: managerId,
          competitionStartDate: competitionStartDate,
          competitionEndDate: competitionEndDate,
          competitionMarketOpening: competitionMarketOpening,
          competitionMarketEnding: competitionMarketEnding,
          competitionInitialBudget: competitionInitialBudget,
          competitionInitialStockValue: competitionInitialStockValue,
          competitionRefreshRate: competitionRefreshRate,
          competitionNumStocks: competitionNumStocks,
          competitionHasStarted: false
        })

        await questionRepository.loadQuestions(competition.dataValues)
        res.status(200).json(competition)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No Tenant associated')
    }
  },

  async addCompetitionDraft (req, res) {
    // const tenant = await models.Tenant.findOne({ where: { tenant: req.body.id } });
    const manager = await models.User.findByPk(req.body.managerId)
    const {
      competitionEndDate, competitionInitialBudget, competitionInitialStockValue,
      competitionRefreshRate, competitionNumStocks, questions
    } = req.body

    if (manager) {
      try {
        console.log('aqui')
        const managerId = manager.dataValues.id
        console.log(managerId)
        const competition = await models.Competition.create({
          managerId: managerId,
          competitionEndDate: competitionEndDate,
          competitionInitialBudget: competitionInitialBudget,
          competitionInitialStockValue: competitionInitialStockValue,
          competitionRefreshRate: competitionRefreshRate,
          competitionNumStocks: competitionNumStocks,
          competitionHasStarted: false
        })

        // await questionRepository.loadQuestions(competition.dataValues)
        questions.forEach(async element => {
          await questionRepository.addQuestion(element, competition.dataValues.id)
        })

        res.status(200).json(competition)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No Tenant associated')
    }
  },

  async toggleCompetition (req, res) {
    console.log(req.query)
    const comp = await models.Competition.findByPk(req.query.id)
    console.log(comp)
    if (comp) {
      try {
        if (comp.competitionHasStarted == 0) {
          models.Competition.update(
            { competitionHasStarted: true },
            { returning: true, where: { id: req.query.id } }
          )
        } else {
          models.Competition.update(
            { competitionHasStarted: false },
            { returning: true, where: { id: req.query.id } }
          )
        }
        res.status(200).json(comp)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No competition associated')
    }
  },

  async changeSettingsCompetition (req, res) {
    console.log(req.query)
    const comp = await models.Competition.findByPk(req.query.id)
    const {
      competitionStartDate, competitionEndDate, competitionMarketOpening,
      competitionMarketEnding, competitionInitialBudget, competitionInitialStockValue,
      competitionRefreshRate, competitionNumStocks
    } = req.body
    if (comp) {
      try {
        models.Competition.update(
          {
            competitionStartDate: competitionStartDate,
            competitionEndDate: competitionEndDate,
            competitionMarketOpening: competitionMarketOpening,
            competitionMarketEnding: competitionMarketEnding,
            competitionInitialBudget: competitionInitialBudget,
            competitionInitialStockValue: competitionInitialStockValue,
            competitionRefreshRate: competitionRefreshRate,
            competitionNumStocks: competitionNumStocks
          },
          { returning: true, where: { id: req.query.id } }
        )
        res.status(200).json(comp)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No competition associated')
    }
  },
  async addPlayerCompetitionWithInvite (userId, inviteToken) {
    try {
      const invite = await models.Invite.findOne({ where: { token: inviteToken } })

      if (invite && invite.dataValues.isManager == false && invite.dataValues.isValid == true) {
        const pc = await models.PlayerCompetition.create({
          playerId: userId,
          competitionId: invite.dataValues.competitionId,
          completedRegistration: false
        })
        inviteRepository.invalidToken(invite.dataValues.token)
        return pc
      } else {
        return null
      }
    } catch (error) {
      return null
    }
  }
}
