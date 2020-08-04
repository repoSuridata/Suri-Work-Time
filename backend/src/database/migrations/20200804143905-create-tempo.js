'use strict';

const { sequelize } = require("../../models/Tempo");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tempo', {
      codigo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'processo',
          key: 'codigo'
        }
      },
      id_empresa: {
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'd'
        }
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
