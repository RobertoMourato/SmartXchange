const { response } = require('../index.js');
const models = require('../models');

module.exports = {

  async addUser(req, res) {
    //console.log(req.body)

    const userType = await models.UserType.findOne({ where: { userType: req.body.userType } });
    const { name, username, email, password, tenantId } = req.body;

    if (userType) {
      try {
        const typeId = userType.dataValues.id;
        console.log(typeId)
        const user = await models.User.create({ name:name, username:username, email:email, password:password, tenantId:tenantId, userTypeId:typeId });
        res.status(200).json(user)
      } catch (error) {
        res.status(400).json(error);
      }
    } else {
      res.status(400).json("No User Type associated");
    }

  },

  
  async getByEmail(email) {

    const user = await models.User.findOne({ where: { email: email } });

    return models.User.build(user.dataValues);

  },

  async getUserTypeById(id){
    
    const usertype = await models.UserType.findByPk(id);

    return models.UserType.build(usertype.dataValues);

  }
}