const models = require('../models')
const company = require('../models/company')
const stockRepository = require('../repository/stockRepository')

module.exports = {

  async addCompany(req, res) {
    const {
      playerCompetitionId,
      companyName,
      companyWebsiteURL,
      companyShortPitch,
      companyCurrentStockPrice
    } = req.body
    console.log(req.body)

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
        console.log(error)
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No company name associated')
    }
  },
  async startCompaniesStocks(competitionId, competitionInitialStockValue) {
    const companies = await models.Company.findAll(
      {
        include: [{
          model: models.PlayerCompetition,
          where: { competitionId: competitionId },
          required: true
        }]
      }
    )
    console.log(companies)
    companies.forEach(async company => {
      const stocks = await stockRepository.addInitialCompanyStocks(company.id, competitionInitialStockValue)
    });
  },
  async getCompany(req, res) {
    const userId = req.query.userId
    const playerComp = await models.PlayerCompetition.findOne({ where: { playerid: userId } })
    if (playerComp) {
      try {
        return await models.Company.findOne({ where: { playerCompetitionId: playerComp.dataValues.id } })
      } catch (error) {
        console.log(error)
        res.status(400).json(error)
      }
    }
  }
}
