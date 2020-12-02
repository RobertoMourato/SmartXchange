const { response } = require('../index.js');
const models = require('../models');

module.exports = {
    async index(req, res) {
      var evaluation = models.Evaluation;
      await evaluation.findAll().then(evaluation => {
        res.status(200).json(evaluation)
      })
        .catch(error => {
          res.status(400).send(error)
        })
  
    },
    async addEvaluation(req, res) {

        const user = await models.User.findOne({ where: { username: req.body.username}});
        const company = await models.Company.findByPk(req.body.companyId);

        const { username,
                companyId,
                evaluationType,
                evaluationContent,
                evaluationDate}= req.body
    
        if (user && company) {
          try {
            const manager_Id = user.dataValues.id
            const company_Id = company.dataValues.id
            const evaluations = await models.Evaluation.create({managerId:manager_Id, 
                                                                companyId:company_Id,
                                                                evaluationType:evaluationType,
                                                                evaluationContent:evaluationContent,
                                                                evaluationDate:evaluationDate})
            res.status(200).json(evaluations)
          } catch (error) {
            res.status(400).json(error)
          }
        } else {
          res.status(400).json("No user or company associated");
        }
    
      }
}