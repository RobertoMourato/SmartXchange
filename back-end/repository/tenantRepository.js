const { response } = require('../index.js');
const models = require('../models');

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

  async addTenant(req, res) {
    console.log(req.body)

    const tenantType = await models.TenantType.findOne({ where: { tenantType: req.body.type } });
    const { name, username, email, password } = req.body;

    if (tenantType) {
      try {
        const typeId = tenantType.dataValues.id;
        console.log(typeId)
        const tenant = await models.Tenant.create({ name:name, username:username, email:email, password:password, tenanttype_id:typeId });
        res.status(200).json(tenant)
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(400).json("No Tenant Type associated");
    }

  },

  async getByEmail(email) {

    const tenant = await models.Tenant.findOne({ where: { email: email } });

    return models.Tenant.build(tenant.dataValues);

  }


}