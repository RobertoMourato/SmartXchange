'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.TenantType, {foreignKey:'tenanttype_id'})
      this.hasMany(models.Competition, {foreignKey:'manager_Id'})
    }
  };
  Tenant.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    tenanttype_id: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: (tenant) => {
          const salt = bcrypt.genSaltSync();
          tenant.password = bcrypt.hashSync(tenant.password, salt);
      },
  },
    modelName: 'Tenant',
  });
  return Tenant;
};