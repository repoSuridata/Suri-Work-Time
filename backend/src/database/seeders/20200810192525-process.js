'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('process', [
      {
        name: 'Carregar Prêmio',
        area: 'TI',
        description: 'Realizar a carga do prêmio'
      },
      {
        name: 'Carregar Sinistro',
        area: 'TI',
        description: 'Realizar a carga do sinistro'
      },
      {
        name: 'Validar Sinistralidade',
        area: 'TI',
        description: 'Fazer a validação da sinistralidade'
      },
      {
        name: 'Validar TUSS',
        area: 'Saúde',
        description: 'Fazer a validação da TUSS'
      },
      {
        name: 'Gerar PPT',
        area: 'TI',
        description: 'Gerar o PPT.'
      },
      {
        name: 'Validar dados, Preencher HL, 10 Maiores e Auditoria',
        area: 'Saúde',
        description: 'Validar dados, Preencher HL, 10 Maiores e Auditoria'
      },
      {
        name: 'Correção e Ajustes',
        area: 'TI',
        description: 'Fazer eventuais correções'
      },
      {
        name: 'Revisão Final',
        area: 'Saúde',
        description: 'Fazer a última revisão'
      },
      {
        name: 'Pronto para o Cliente',
        area: 'N/A',
        description: 'Disponível para o cliente'
      },
      {
        name: 'PPT em Pós Venda',
        area: 'TI',
        description: 'PPT disponível em Pós Venda'
      },
      {
        name: 'Dados disponíveis no portal',
        area: 'TI',
        description: 'Disponibilidade dos dados no Portal Suridata'
      },
      {
        name: 'Entregue - Reunião realizada',
        area: 'N/A',
        description: 'Concluído'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('process', null, {});    
  }
};
