'use strict'
const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class TenantType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.hasMany(models.Tenant, { foreignKey: 'tenanttype_id' })
    }
  };
  TenantType.init({
    tenantType: DataTypes.STRING,
    isManager: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TenantType'
  })
  return TenantType
}
