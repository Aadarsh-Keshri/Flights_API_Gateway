'use strict';
const {
  Model
} = require('sequelize');

const {Enums}=require('../utils/common');
const {ADMIN,FLIGHT_COMPANY,CUSTOMER}=Enums.USER_ROLES_ENUMS;

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.User,{through: 'User_Role',as: 'user'});
    }
  }
  Role.init({
    name: {
      type: DataTypes.ENUM({
        values: [ADMIN,FLIGHT_COMPANY,CUSTOMER]
      }),
      allowNull: false,
      defaultValue: CUSTOMER
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};