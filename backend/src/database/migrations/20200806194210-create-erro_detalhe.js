'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('erro_detalhe', {
      id_erro: {
        type: Sequelize.INTEGER,        
        autoIncrement: true,
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
    await queryInterface.dropTable('erro_detalhe');
  }
};
