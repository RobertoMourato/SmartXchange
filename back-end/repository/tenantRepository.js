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

    var { username, name, newUsername, email, password } = req.body;
    constTenant = await models.Tenant.findOne({ where: { username: username } });
    tenantNewUsername = await models.Tenant.findOne({ where: { username: newUsername } });

    if (constTenant) {
      if (!tenantNewUsername) {
        name = (name != undefined ? name : constTenant.name);
        email = (email != undefined ? email : constTenant.email);
        password = (password != undefined ? password : constTenant.name);
        newUsername = (password != undefined ? newUsername : constTenant.username);

        if (name.split() != "" && email.trim("") && password.trim("")) {

          const salt = bcrypt.genSaltSync();
          var EncryptedPassword = bcrypt.hashSync(password, salt);

          const updated = await models.Tenant.update({
            username: newUsername,
            name: name,
            email: email,
            password: EncryptedPassword
          }, {
            where: { username: username }
          })
          res.status(200);
        } else {
          res.status(400).json("Invaid arguments!");
        }
      } else {
        res.status(400).json("New username is unavailable!");
      }
    } else {
      res.status(400).json("Tenant not found!");
    }
  },


  async getByEmail(email) {

    const tenant = await models.Tenant.findOne({ where: { email: email } });

    return models.Tenant.build(tenant.dataValues);

  }


}