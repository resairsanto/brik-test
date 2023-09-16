'use strict';
const { hashPassword } = require("../helpers/bcryptjs")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: hashPassword("12345"),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true
    });
  }
};
