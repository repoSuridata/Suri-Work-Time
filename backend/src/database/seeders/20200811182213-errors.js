'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('error', [
      {
        name: "ERRO TESTE",
        description: "DESCRICAO ERRO TESTE"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('error', null, {});    
  }
};
