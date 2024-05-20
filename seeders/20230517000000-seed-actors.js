'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Actors', [
      { first_name: 'John', last_name: 'Doe', age: 30, last_update: new Date() },
      { first_name: 'Jane', last_name: 'Smith', age: 35, last_update: new Date() },
      { first_name: 'Emily', last_name: 'Jones', age: 28, last_update: new Date() },
      { first_name: 'Michael', last_name: 'Brown', age: 40, last_update: new Date() },
      { first_name: 'Sarah', last_name: 'Davis', age: 25, last_update: new Date() }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Actors', null, {});
  }
};
