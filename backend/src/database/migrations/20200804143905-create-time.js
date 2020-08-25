'use strict';

const { sequelize } = require("../../models/Time");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('time', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      company_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'companies',
          key: 'id'
        }
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      process_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'process',
          key: 'code'
        }
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      }      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('time');
  }
};


