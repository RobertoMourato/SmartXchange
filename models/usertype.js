'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.User, {foreignKey:'userTypeId'});
    }
  };
  UserType.init({
    userType: DataTypes.STRING,
    isEntrepreneur: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'UserType',
  });
  return UserType;
};