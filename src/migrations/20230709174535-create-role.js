'use strict';
/** @type {import('sequelize-cli').Migration} */

const {Enums}=require('../utils/common');
const {ADMIN,FLIGHT_COMPANY,CUSTOMER}=Enums.USER_ROLES_ENUMS;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.ENUM,
        values: [ADMIN,FLIGHT_COMPANY,CUSTOMER],
        allowNull: false,
        defaultValue: CUSTOMER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Roles');
  }
};