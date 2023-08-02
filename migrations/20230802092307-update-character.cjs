/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Characters', 'money', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    });
    
    await queryInterface.removeColumn('Characters', 'skills');
    await queryInterface.removeColumn('Characters', 'items');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Characters', 'skills', {
      type: Sequelize.STRING,  // Assume the original type was STRING
      allowNull: true,         // Assume the original allowNull was true
    });
    
    await queryInterface.addColumn('Characters', 'items', {
      type: Sequelize.STRING,  // Assume the original type was STRING
      allowNull: true,         // Assume the original allowNull was true
    });
    
    await queryInterface.removeColumn('Characters', 'money');
  }
};