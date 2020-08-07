'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comentario', {
      id_empresa: {
        type: Sequelize.INTEGER,
      },        
      data: {
        type: Sequelize.DATEONLY
      },
      regra: {
        type: Sequelize.STRING
      },
      comentario: {
        type: Sequelize.STRING
      },    
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comentario');
  }
};
