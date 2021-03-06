const inviteRep = require('../repository/inviteRepository')
const emailService = require('../emailService/emailService')

/*
  Body:
  {"invitedBy:"",
    email,""}
  */

exports.inviteManager = async function (req, res) {
  try {
    const invite = await inviteRep.inviteManager(req, res)
    if (invite) {
      const emailstatus = await emailService.sendManagerInvite(req, invite.dataValues.token)

      if (emailstatus === 200) {
        return res.status(emailstatus).json('Invite sent succesfully')
      } else {
        return res.status(emailstatus).json('Something went wrong when sending the email')
      }
    } else {
      return res.status(400).json('Error! Your SuperAdmin is invalid!')
    }
  } catch (e) {
    console.log(e)
    return res.sendStatus(500)
  }
}
exports.verifyManager = async function (req, res) {
  try {
    const results = await inviteRep.isManager(req, res)
    res.json(results)
  } catch (e) {
    console.log(e)
    res.sendStatus(500)
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
    // console.log(req.body)

    const invite = await inviteRep.inviteUser(req, res)
    if (invite) {
      const emailstatus = await emailService.sendPlayerInvite(req, invite.dataValues.token)

      if (emailstatus === 200) {
        return res.status(emailstatus).json('Invite sent succesfully')
      } else {
        return res.status(emailstatus).json('Something went wrong when sending the email')
      }
    } else {
      return res.status(400).json('Error! Your manager or competition are invalid!')
    }
  } catch (e) {
    console.log(e)
    return res.status(500)
  }
}

exports.getManagersInvites = async function (req, res) {
  try {
    console.log(req.query.superAdminId)
    const invites = await inviteRep.getManagersInvites(req.query.superAdminId)
    if (invites) {
      res.json(invites).status(200)
    } else {
      res.status(400)
    }
  } catch (error) {
    console.log(error)
    return res.status(500)
  }
}
