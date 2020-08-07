'use strict';

const { sequelize } = require("../../models/Tempo");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tempo', {
      codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'processo',
          key: 'codigo'
        }
      },
      id_empresa: {
        type: Sequelize.INTEGER,
      },
      id_usuario: {
        type: Sequelize.INTEGER,
      },
      tempo: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.DATEONLY
      }      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tempo');
  }
};
