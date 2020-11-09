const inviteRep = require('../repository/inviteRepository')
const { inviteManager } = require('../controllers/inviteController.js');
const emailService = require('../emailService/emailService');

/*
  Body:
  {"invitedBy:"",
    email,""}
  */

exports.inviteManager = async function (req, res) {
    try {
        console.log(req.body)

        let results = await inviteRep.inviteManager(req, res);

        emailService.sendManagerInvite(req, res);

        return res
    }
    catch (e) {
        console.log(e);
       return res.sendStatus(500);
    }
}

exports.inviteUser = async function (req, res) {
    try {
        console.log(req.body)

        let results = await inviteRep.inviteUser(req, res);

         emailService.sendPlayerInvite(req, res)

        return res
    }
    catch (e) {
        console.log(e);
       return res.sendStatus(500);
    }
}