const models = require('../models')
const sequelize = require('sequelize')

module.exports = {
  async index (req, res) {
    const ranking = models.Ranking
    await ranking.findAll().then(ranking => {
      res.status(200).json(ranking)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async addRanking (req, res) {
    const playercomp = await models.PlayerCompetition.findOne({ where: { playerId: req.body.playerId, competitionId: req.body.competitionId } })
    const {
      rankingPosition,
      rankingType
    } = req.body

    if (playercomp) {
      try {
        const playerCompId = playercomp.dataValues.id
        const ranking = await models.Ranking.create({
          playerCompetitionId: playerCompId,
          rankingPosition: rankingPosition,
          rankingType: rankingType
        })
        res.status(200).json(ranking)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No competition associated')
    }
  },

  async calculatePointsInvestors (competitionId) {
    const users = await models.PlayerCompetition.findAll({
      where: {
        competitionId: competitionId
      }
    })
    const competition = await models.PlayerCompetition.findOne({
      where: { id: competitionId }
    })

    let rankings = []
    const rankings = []
    users.forEach(async element => {
      const player = element.dataValues

      const r = await models.Ranking.build({
        playerCompetitionId: competitionId,
        rankingType: 'Investor',
        rankingPoints: player.wallet - competition.competitionInitialBudget
      })
      rankings.push(r)
    })

    // sort pelos rankingPoint
    // create ranking
  }
}
