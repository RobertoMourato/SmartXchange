const { response } = require('../index.js');
const models = require('../models');

module.exports = {
    async index(req, res) {
      var ranking = models.Stock;
      await ranking.findAll().then(ranking => {
        res.status(200).json(ranking)
      })
        .catch(error => {
          res.status(400).send(error)
        })
  
    },
    async addRanking(req, res) {
        const playercomp = await models.PlayerCompetition.findByPk(req.body.playerCompetitionId);
        const {
                rankingPosition,
                rankingType}= req.body
    
        if (playercomp) {
          try {
            const playerComp_Id = playercomp.dataValues.id
            const ranking = await models.Ranking.create({playerCompetitionId:playerComp_Id, 
                                                        rankingPosition:rankingPosition,
                                                        rankingType:rankingType})
            res.status(200).json(ranking)
          } catch (error) {
            res.status(400).json(error)
          }
        } else {
          res.status(400).json("No competition associated");
        }
    
      }
}