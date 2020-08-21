'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('error_occurrence', {
      error_id: {
        type: Sequelize.INTEGER,        
        references: {
          model: 'error',
          key: 'code'
        }
      },
      company_id: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      error_amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('error_occurrence');
  }
};
