'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Check if the column already exists before adding it
    const table = await queryInterface.describeTable('actors');
    if (!table.age) {
      await queryInterface.addColumn('actors', 'age', {
        type: Sequelize.INTEGER,
        allowNull: true
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the column only if it exists
    const table = await queryInterface.describeTable('actors');
    if (table.age) {
      await queryInterface.removeColumn('actors', 'age');
    }
  }
};
