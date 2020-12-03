const models = require('../models')

module.exports = {
  async index (req, res) {
    const evaluation = models.Evaluation
    await evaluation.findAll().then(evaluation => {
      res.status(200).json(evaluation)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async addEvaluation (req, res) {
    const user = await models.User.findOne({ where: { username: req.body.username } })
    const company = await models.Company.findByPk(req.body.companyId)

    const {
      evaluationType,
      evaluationContent,
      evaluationDate
    } = req.body

    if (user && company) {
      try {
        const managerId = user.dataValues.id
        const companyId = company.dataValues.id
        const evaluations = await models.Evaluation.create({
          managerId: managerId,
          companyId: companyId,
          evaluationType: evaluationType,
          evaluationContent: evaluationContent,
          evaluationDate: evaluationDate
        })
        res.status(200).json(evaluations)
      } catch (error) {
        res.status(400).json(error)
      }
    } else {
      res.status(400).json('No user or company associated')
    }
  }
}
