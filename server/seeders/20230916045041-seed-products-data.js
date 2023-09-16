'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let products = require("../data/products.json")
    products.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Products', products, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true
    });
  }
};
