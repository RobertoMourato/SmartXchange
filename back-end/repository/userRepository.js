const { response } = require('../index.js');
const models = require('../models');
const { get } = require('../routes/userRoutes.js');

module.exports = {

  async addUser(req, res) {
    //console.log(req.body)

    const userType = await models.UserType.findOne({ where: { userType: req.body.userType } });
    const { name, username, email, password, managerId } = req.body;

    if (userType) {
      const manager = await models.User.findByPk(managerId);
      if (manager) {
        if (UserType.dataValues.isManager) {
          try {
            const user = await models.User.create({ name: name, username: username, email: email, password: password, managerId: manager.dataValues.id, tenantId: manager.dataValues.tenantId, userTypeId: typeId });
            res.status(200).json(user)
          } catch (error) {
            res.status(400).json(error);
          }

        } else {
          try {
            const typeId = userType.dataValues.id;
            console.log(typeId)

            const user = await models.User.create({ name: name, username: username, email: email, password: password, tenantId: manager.dataValues.tenantId, userTypeId: typeId });
            res.status(200).json(user)
          } catch (error) {
            res.status(400).json(error);
          }
        }
      }else{
        
      res.status(400).json("No Manager associated");
      }
    } else {
      res.status(400).json("No User Type associated");
    }

  },


  async getUserById(req, res) {
    var user = models.User;
    await user.findOne({ where: { id: req.body.id } , include : ["players", "manager"]})
    .then(users => {
      res.status(200).json(users)
    })
      .catch(error => {
        res.status(400).send(error)
      })

  },

  async getByEmail(email) {

    const user = await models.User.findOne({ where: { email: email } });

    return models.User.build(user.dataValues);

  },
  async getByUsername(username) {

    const user = await models.User.findOne({ where: { username: username } });

    return models.User.build(user.dataValues);

  },

  async getUserTypeById(id) {

    const usertype = await models.UserType.findByPk(id);

    return models.UserType.build(usertype.dataValues);

  },

  
  async updateTenant(req, res) {
    var { username, name, email, password } = req.body;

    const salt = bcrypt.genSaltSync();
    var EncryptedPassword = bcrypt.hashSync(password, salt);

    const updated = await models.User.update({
      username: username,
      name: name,
      email: email,
      password: EncryptedPassword
    }, {
      where: { username: username }
    })

  }, 

  async deleteUser(req) {
    console.log('entrou');
    await models.User.destroy({ where: { username: req.body.username } })
  },
}