'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Items', [
      {
        name: 'Item A',
        skills: JSON.stringify({ skill1: 1, skill2: 2 }),
        price: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Item B',
        skills: JSON.stringify({ skill3: 3, skill4: 4 }),
        price: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more items as needed
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Items', null, {});
  }
};
