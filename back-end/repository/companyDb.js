const { response } = require('../index.js');
const models = require('../models');

module.exports = {

  async addCompany(req, res) {

    const { playerCompetitionId,
            companyName,
            companyValuePropositions, 
            companyCostumerSegments, 
            companyCostumerRelationships, 
            companyChannels, 
            companyCostStructure, 
            companyKeyPartners, 
            companyKeyResources, 
            companyWebsiteURL, 
            companyShortPitch, 
            companyCurrentStockPrice } = req.body;
    
    if (companyName) {
      try {
        const company = await models.Company.create({ playerCompetitionId:playerCompetitionId, 
                                                      companyName:companyName, 
                                                      companyValuePropositions:companyValuePropositions, 
                                                      companyCostumerSegments:companyCostumerSegments, 
                                                      companyCostumerRelationships:companyCostumerRelationships, 
                                                      companyChannels:companyChannels, 
                                                      companyCostStructure:companyCostStructure, 
                                                      companyKeyPartners:companyKeyPartners, 
                                                      companyKeyResources:companyKeyResources, 
                                                      companyWebsiteURL:companyWebsiteURL, 
                                                      companyShortPitch:companyShortPitch, 
                                                      companyCurrentStockPrice:companyCurrentStockPrice });
        res.status(200).json(company);
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(400).json("No company name associated");
    }

  }
}