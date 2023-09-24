"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert(
    //   "Provinces",
    //   [
    //     {
    //       name: "DKI JAKARTA",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: "JAWA BARAT",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: "JAWA TENGAH",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: "DI YOGYAKARTA",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //     {
    //       name: "JAWA TIMUR",
    //       createdAt: new Date(),
    //       updatedAt: new Date(),
    //     },
    //   ],
    //   {}
    // );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete("Provinces", null, {});
  },
};
