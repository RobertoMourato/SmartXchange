const { response } = require('../index.js');
const models = require('../models');
const Tenant = require('../models/tenant')

const bcrypt = require('bcryptjs');


module.exports = {
  async index(req, res) {
    console.log("rep");
    var tenant = models.Tenant;
    await tenant.findAll().then(tenants => {
      res.status(200).json(tenants)
    })
      .catch(error => {
        res.status(400).send(error)
      })

  },

  async getTenantByUsername(username) {

    const tenant = await models.Tenant.findOne({ where: { username: username } });
    if (tenant != null) {
      return models.Tenant.build(tenant.dataValues);
    } else {
      return null;
    }

  },

  async addTenant(req, res) {
    console.log(req.body)

    const tenantType = await models.TenantType.findOne({ where: { tenantType: req.body.type } });
    const { name, username, email, password } = req.body;

    if (name.trim() != "" && username.trim() != "" && email.trim("") && password.trim("")) { // Fazer verificações aqui dos atributos 
      if (tenantType) {
        try {
          const typeId = tenantType.dataValues.id;
          console.log(typeId)
          const tenant = await models.Tenant.create({ name: name, username: username, email: email, password: password, tenanttype_id: typeId });
          res.status(200).json(tenant);
        } catch (error) {
          res.status(400).json(error);
        }
      } else {
        res.status(400).json("No Tenant Type associated");
      }
    } else {
      res.status(400).json("Ivalid arguments!");
    }
  },

  async updateTenant(req, res) {
    var { username, name, email, password } = req.body;

    const salt = bcrypt.genSaltSync();
    var EncryptedPassword = bcrypt.hashSync(password, salt);

    const updated = await models.Tenant.update({
      username: username,
      name: name,
      email: email,
      password: EncryptedPassword
    }, {
      where: { username: username }
    })

  },


  async getByEmail(email) {

    const tenant = await models.Tenant.findOne({ where: { email: email } });

    return models.Tenant.build(tenant.dataValues);

  }


}