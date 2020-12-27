const models = require('../models')
const userRep = require('./userRepository')

module.exports = {
  /*
    Body:
    {"email":"",
    "invitedBy:""}
    */
  async inviteManager (req, res) {
    const manager = await userRep.getByUsername(req.body.invitedBy)

    if (manager) {
      try {
        const invite = await models.Invite.create({ invitedBy: manager.id, isManager: true, competitionId: null, email: req.body.email, isValid: true })

        return models.Invite.build(invite.dataValues)
      } catch (error) {
        console.log(error)
        return null
        // res.status(400).json(error)
      }
    } else {
      // console.log(manager)
      return null
      // res.status(400).json("Error! This SuperAdmin doesn't exist!")
    }
  },

  /*
  Body:
  {"email":""
  "invitedBy:"",
  "competitionId:"",}
  */
  async inviteUser (req, res) {
    try {
      const manager = await userRep.getByUsername(req.body.invitedBy)
      const competition = await models.Competition.findByPk(req.body.competitionId)

      if (manager != null) {
        if (competition != null) {
          try {
            const invite = await models.Invite.create({ invitedBy: manager.id, isManager: false, competitionId: competition.dataValues.id, email: req.body.email, isValid: true })
            console.log(invite)
            return models.Invite.build(invite.dataValues)
          } catch (error) {
            console.log(error)
            return null
          }
        } else {
          console.log('ee')
          //  res.json("Error! Invalid competition!");
          return null
        }
      } else {
        console.log('bb')
        // res.json("Error! This Manager doesn't exist!");
        return null
      }
    } catch (error) {
      res.status(400).json(error)
    }
  },

  async isManager (req, res) {
    try {
      const invite = await models.Invite.findOne({ where: { token: req.query.invite } })
      if (invite != null) {
        return invite
      } else {
        console.log('ee')
        //  res.json("Error! Invalid competition!");
        return null
      }
    } catch (error) {
      res.status(400).json(error)
    }
  }
}
