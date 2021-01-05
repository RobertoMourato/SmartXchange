const models = require('../models')

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

    const rankings = []
    users.forEach(async element => {
      const player = element.dataValues

      const rankings = await models.Ranking.build({
        playerCompetitionId: competitionId,
        rankingType: 'Investor',
        rankingPoints: player.wallet - competition.competitionInitialBudget
      })
      rankings.push(rankings)
    })

    // sort pelos rankingPoint
    rankings.sort(function (a, b) { return a.rankingPoints - b.rankingPoints })
    let count = rankings.length
    // create ranking
    rankings.forEach(element => {
      models.Ranking.create({
        playerCompetitionId: competitionId,
        rankingType: 'Investor',
        rankingPoints: element.rankingPoints,
        rankingPosition: count
      })
      count = count - 1
    })
  },

  async getRankingsByPlayerAndCompetition (playerId, competitionId) {
    try {
      return await models.Ranking.findAll({
        order: [['createdAt', 'ASC']],
        include: {
          model: models.PlayerCompetition,
          where: {
            playerId: playerId,
            competitionId: competitionId
          }
        }
      })
    } catch (error) {
      return null
    }
  },
  async getCompetitionLatestRankings (competitionId) {
    try {
      const lastUpdate = await models.Ranking.max('createdAt')
      return await models.Ranking.findAll({
        order: [['rankingPosition', 'ASC']],
        where: { createdAt: lastUpdate },
        include: {
          model: models.PlayerCompetition,
          where: {
            competitionId: competitionId
          },
          include: {
            model: models.User
          }
        }
      })
    } catch (error) {
      console.log(error.message)
      return null
    }
  }
}
