
const { response } = require('../index.js');
const models = require('../models');

module.exports = {
    /*
    Body:
    {"invitedBy:""}
    */
    async inviteManager(req, res) {

        const Tenant = models.Tenant.findByPk(req.body.invitedBy);
        if (Tenant) {
            try {
                const invite = await models.Invite.create({invitedBy:req.body.invitedBy, isManager:true, competitionId:null,isValid:true});

                res.status(200).json("Invite was created!")
            } catch (error) {
                res.status(400).json(error);
            }
        } else {
            res.status(400).json("Error! This SuperAdmin doesn't exist!");


        }
    },

    /*
  Body:
  {"invitedBy:"",
  "competitionId:"",}
  */
    async inviteUser(req, res) {

        const Tenant = models.Tenant.findByPk(req.body.invitedBy);
      //const competition = models.Competition.findByPk(req.body.competitionId);
        
      if (Tenant) {
          //if(competition){
            try {
               // const invite = await models.Invite.create({invitedBy:req.body.invitedBy, isManager:false, competitionId:req.body.competitionId,isValid:true});

                res.status(200).json("Invite was created!")
            } catch (error) {
                res.status(400).json(error);
            }
            //} else{ res.status(400).json("Error! Invalid competition!");}
        } else {
            res.status(400).json("Error! This Manager doesn't exist!");
        }

    }
}