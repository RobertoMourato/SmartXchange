'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.UserType, {foreignKey:'userTypeId'})
    }
  };
  User.init({
    userId: DataTypes.INTEGER,
    tenantId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userTypeId: DataTypes.INTEGER,
    initialBudget: DataTypes.INTEGER,
    currentBalance: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
      },
  },
    modelName: 'User',
  });
  return User;
};