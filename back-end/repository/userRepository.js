const models = require('../models')
const bcrypt = require('bcryptjs')

module.exports = {

  async index (req, res) {
    let results
    await models.User.findAll()
      .then((users) => {
        results = users
      })
      .catch(error => {
        console.log(error)
        return null
      })
    return results
  },
  /*
  //add Manager
  {
      "userType":"Manager",
      "tenantId":"2",
      "name":"João Koi",
      "username":"jokoi",
      "email":"loiyt@koi.com",
      "password":"1234"
  }
  //add Entrepeneur or Investor
  {
      "userType":"Entrepeneur",
      "managerId":"4",
      "name":"João Koi",
      "username":"jokoi",
      "email":"loiyt@koi.com",
      "password":"1234"
  }
  */

  async addUser (req, res) {
    //  console.log(req.body)
    const { name, username, email, password, token2 } = req.body
    const token3 = token2.split('=')[1]
    const invite = await models.Invite.findOne({ where: { token: token3 } })
    if (invite.dataValues.isValid) {
      const manager = await models.User.findByPk(invite.dataValues.invitedBy)
      if (invite.dataValues.isManager && manager) {
        try {
          const user = await models.User.create({
            name: name,
            username: username,
            email: email,
            password: password,
            tenantId: manager.dataValues.tenantId,
            userTypeId: 3,
            managerId: null
          })
          this.invalidToken(req.body.token2.split('=')[1])
          return await models.User.build(user.dataValues)
          // console.log('user',user)
          // res.status(200).json(user)
        } catch (error) {
          return null
          // res.status(400).json(error);
        }
      } else {
        if (manager) {
          try {
            const user = await models.User.create({
              name: name,
              username: username,
              email: email,
              password: password,
              tenantId: manager.dataValues.tenantId,
              userTypeId: null,
              managerId: manager.dataValues.id
            })
            this.invalidToken(req.body.token2.split('=')[1])
            return await models.User.build(user.dataValues)
            // console.log('user',user)
            // res.status(200).json(user)
          } catch (error) {
            return null
            // res.status(400).json(error);
          }
        }
      }
    } else {
      return 400
      // res.status(400).json("No User Type associated");
    }
  },

  async getUserById (req, res) {
    const user = models.User
    let User = null
    // await user.findOne({ where: { id: req.body.id }, include: ["players", "manager"] })~
    await user.findOne({ where: { id: req.body.id } })
      .then(user => {
        // res.status(200).json(users)
        User = user
      })
      .catch(error => {
        console.log(error)
        // res.status(400).send(error)
        return null
      })

    return User
  },

  async getByEmail (email) {
    const user = await models.User.findOne({ where: { email: email } })
    if (user) {
      return models.User.build(user.dataValues)
    } else {
      return null
    }
  },
  async invalidToken (token2) {
    console.log(token2)
    try {
      models.Invite.update(
        { isValid: false },
        { returning: true, where: { token: token2 } }
      )
    } catch (error) {
      console.log('nao invalidou')
      return null
    }
  },
  async getByUsername (username) {
    const user = await models.User.findOne({ where: { username: username } })
    if (user) {
      console.log(user)
      return models.User.build(user.dataValues)
    }
    return null
  },

  async getUserTypeById (id) {
    const usertype = await models.UserType.findByPk(id)
    if (usertype) {
      return models.UserType.build(usertype.dataValues)
    } else {
      return null
    }
  },

  async updateUser (req, res) {
    const { username, newUsername, name, email, password } = req.body

    const salt = bcrypt.genSaltSync()
    const EncryptedPassword = bcrypt.hashSync(password, salt)

    await models.User.update({
      username: newUsername,
      name: name,
      email: email,
      password: EncryptedPassword
    }, {
      where: { username: username }
    })
  },

  async deleteUser (req) {
    console.log('entrou')
    await models.User.destroy({ where: { username: req.body.username } })
  }
}
