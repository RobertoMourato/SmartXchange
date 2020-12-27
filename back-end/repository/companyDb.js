const models = require('../models')

module.exports = {

  async addCompany (req, res) {
    const {
      playerCompetitionId,
      companyName,
      companyWebsiteURL,
      companyShortPitch,
      companyCurrentStockPrice
    } = req.body

    if (companyName) {
      try {
        const company = await models.Company.create({
          playerCompetitionId: playerCompetitionId,
          companyName: companyName,
          companyWebsiteURL: companyWebsiteURL,
          companyShortPitch: companyShortPitch,
          companyCurrentStockPrice: companyCurrentStockPrice
        })
        res.status(200).json(company)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No company name associated')
    }
  },

  async getCompany (req, res) {
    const userId = req.query.userId
    const playerComp = await models.PlayerCompetition.findOne({ where: { playerid: userId } })
    if(playerComp){
      try {
        return await models.Company.findOne({ where: { playerCompetitionId: playerComp.dataValues.id } })
      } catch (error) {
        console.log(error)
        res.status(400).json(error)
      }
    }
  },

  async updateCompany(body){
    try {
      const company = await models.Company.findOne({ where: { id: body.id, playerCompetitionId: body.playerCompetitionId} })

      if(company){
        models.Company.update(
          { companyName: body.companyName,
            companyWebsiteURL: body.companyWebsiteURL,
            companyShortPitch: body.companyShortPitch},
          { where: { id: body.id } })
      }
    } catch (error) {
      console.log(error)
      res.status(400).json(error)
    }
  }
}
