'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('erro_detalhe', {
      id_erro: {
        type: Sequelize.INTEGER,
        references: {
          model: 'erro',
          key: 'codigo'
        }
      },
      id_empresa: {
        type: Sequelize.INTEGER,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
      },
      data: {
        type: Sequelize.DATEONLY,
      },
      qtd_erro: {
        type: Sequelize.INTEGER,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('erro_detalhe');
  }
};
