"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "admin@gmail.com",
        password: "123456", //plain text adadfsdffs->hash pw
        firstName: "HINT",
        lastName: "Cris",
        address: "USA",
        gender: 1,
        typeRole: "ROLE",
        keyRole: "R1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
