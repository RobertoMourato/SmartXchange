const models = require('../models')

module.exports = {
  async index (req, res) {
    console.log('rep')
    const tenanttype = models.TenantType
    await tenanttype.findAll().then(tenants => {
      res.status(200).json(tenants)
    })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  async getTenantTypeById (tenantId) {
    const tenanttype = await models.TenantType.findByPk(tenantId)
    console.log(tenanttype)
    return await models.TenantType.build(tenanttype.dataValues)
  }

}
