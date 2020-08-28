'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('rule_commentary', {
      company_id: {
        type: Sequelize.INTEGER,
      },        
      date: {
        type: Sequelize.DATEONLY
      },
      rule: {
        type: Sequelize.STRING
      },
      commentary: {
        type: Sequelize.STRING
      },    
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('rule_commentary');
  }
};
