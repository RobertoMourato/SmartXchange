const models = require('../models')
const bcrypt = require('bcryptjs')

module.exports = {
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
    // console.log(req.body)
    const userType = await models.UserType.findOne({ where: { userType: req.body.userType } })
    const { name, username, email, password, managerId, tenantId } = req.body

    if (userType) {
      const manager = await models.User.findByPk(managerId)
      if (manager) {
        try {
          const typeId = userType.dataValues.id
          const user = await models.User.create({ name: name, username: username, email: email, password: password, tenantId: manager.dataValues.tenantId, userTypeId: typeId })
          return await models.User.build(user.dataValues)
        // console.log('user',user)
          // res.status(200).json(user)
        } catch (error) {
          return null
          // res.status(400).json(error);
        }
      } else {
        console.log(userType.dataValues.isManager)
        if (userType.dataValues.isManager == true) {
          console.log('aqui')
          try {
            const typeId = userType.dataValues.id
            const man = await models.User.create({ name: name, username: username, email: email, password: password, tenantId: tenantId, userTypeId: typeId })
            return await models.User.build(man.dataValues)
            // res.status(200).json(man)
          } catch (error) {
            return null
            // res.status(400).json(error);
          }
        } else {
          return 400
          // res.status(400).json("No Manager associated");
        }
      }
    } else {
      return 400
      // res.status(400).json("No User Type associated");
    }
  },

  async getUserById (req, res) {
    const user = models.User
    // await user.findOne({ where: { id: req.body.id }, include: ["players", "manager"] })~
    await user.findOne({ where: { id: req.body.id } })
      .then(users => {
        res.status(200).json(users)
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },

  async getByEmail (email) {
    const user = await models.User.findOne({ where: { email: email } })

    return models.User.build(user.dataValues)
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

    return models.UserType.build(usertype.dataValues)
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
