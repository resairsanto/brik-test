'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let categories = require("../data/categories.json")
    categories.forEach(el => {
      el.createdAt = el.updatedAt = new Date()
    })
    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true
    });
  }
};
