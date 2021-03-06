'use strict'
const {
  Model
} = require('sequelize')
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      this.belongsTo(models.UserType, { foreignKey: 'userTypeId' })

      this.hasMany(models.Order, { foreignKey: 'playerId' })
      this.hasMany(models.News, { foreignKey: 'userId' })
      this.hasMany(models.Stock, { foreignKey: 'playerId' })
      this.hasMany(models.PlayerCompetition, { foreignKey: 'playerId', as: 'playercompetition' })
      this.hasMany(models.Evaluation, { foreignKey: 'managerId' })

      this.hasMany(models.Order, { foreignKey: 'playerId' })
      this.hasMany(models.News, { foreignKey: 'userId' })
      this.hasMany(models.Stock, { foreignKey: 'playerId' })
      this.hasMany(models.PlayerCompetition, { foreignKey: 'playerId' })

      this.hasMany(models.Competition, { foreignKey: 'managerId', as: 'competitions' })
    }
  };
  User.init({
    tenantId: DataTypes.INTEGER,
    managerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    userTypeId: DataTypes.INTEGER
  }, {
    sequelize,
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync()
        user.password = bcrypt.hashSync(user.password, salt)
      }
    },
    modelName: 'User'
  })
  return User
}
