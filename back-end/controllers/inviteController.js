const inviteRep = require('../repository/inviteRepository')
const { inviteManager } = require('../controllers/inviteController.js');
const emailService = require('../emailService/emailService');
const { sequelize } = require('sequelize');

/*
  Body:
  {"invitedBy:"",
    email,""}
  */

exports.inviteManager = async function (req, res) {
    try {
        console.log(req.body)

        let invite = await inviteRep.inviteManager(req, res);
        console.log(invite);
        if (invite) {
            const emailstatus = await emailService.sendManagerInvite(req, invite.id);

            if (emailstatus == 200) {
                return res.status(emailstatus).json("Invite sent succesfully");
            } else {
                return res.status(emailstatus).json("Something went wrong when sending the email");
            }
        }
        else {
            return res.status(400).json("Error! Your SuperAdmin is invalid!");
        }


    }
    catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}


/*
  Body:
  {"invitedBy:"",
    email:"",
    competitionId:""}
  */

exports.inviteUser = async function (req, res) {
    //  const t = await sequelize.transaction();
    try {
        console.log(req.body)

        let invite = await inviteRep.inviteUser(req, res);
        if (invite) {
            const emailstatus = await emailService.sendPlayerInvite(req, invite.id);

            if (emailstatus == 200) {
                return res.status(emailstatus).json("Invite sent succesfully");
            } else {
                return res.status(emailstatus).json("Something went wrong when sending the email");
            }
        }
        else {
            return res.status(400).json("Error! Your manager or competition are invalid!");
        }
    }
    catch (e) {
        console.log(e);
        return res.status(500);
    }
}