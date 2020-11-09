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

        let emailInvite = emailService.sendManagerInvite(req, res);

        res.json(emailInvite);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

exports.inviteUser = async function (req, res) {
    try {
        console.log(req.body)

        let results = await inviteRep.inviteUser(req, res);

        let emailInvite = emailService.sendPlayerInvite(req, res)

        res.json(results);
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}