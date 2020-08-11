'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('erro', [
      {
        nome: "ERRO TESTE",
        descricao: "DESCRICAO ERRO TESTE"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('erro', null, {});    
  }
};
