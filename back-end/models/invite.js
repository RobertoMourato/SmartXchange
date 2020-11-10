'use strict';
const {
  Model
} = require('sequelize');

var TokenGenerator = require( 'token-generator' )({
  salt: '9JqAgBqDMq2hfiF',
  timestampMap: 'XcWkdr4ayR', // 10 chars array for obfuscation proposes
});

module.exports = (sequelize, DataTypes) => {
  class Invite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Invite.init({
    token: DataTypes.STRING,
    invitedBy: DataTypes.INTEGER,
    isManager: DataTypes.BOOLEAN,
    competitionId: DataTypes.INTEGER,
    email: DataTypes.STRING,
    isValid: DataTypes.BOOLEAN
  }, {
    sequelize,
    hooks: {
      beforeCreate: (invite) => {
        invite.token = TokenGenerator.generate();
      }
    },
    modelName: 'Invite',
  });
  return Invite;
};