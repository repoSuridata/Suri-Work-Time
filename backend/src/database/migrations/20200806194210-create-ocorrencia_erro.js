'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ocorrencia_erro', {
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
        allowNull: false
      },
      qtd_erro: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ocorrencia_erro');
  }
};
