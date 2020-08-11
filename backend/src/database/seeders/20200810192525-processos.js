'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('processo', [
      {
        nome: 'Carregar Prêmio',
        area: 'TI',
        descricao: 'Realizar a carga do prêmio'
      },
      {
        nome: 'Carregar Sinistro',
        area: 'TI',
        descricao: 'Realizar a carga do sinistro'
      },
      {
        nome: 'Validar Sinistralidade',
        area: 'TI',
        descricao: 'Fazer a validação da sinistralidade'
      },
      {
        nome: 'Validar TUSS',
        area: 'Saúde',
        descricao: 'Fazer a validação da TUSS'
      },
      {
        nome: 'Gerar PPT',
        area: 'TI',
        descricao: 'Gerar o PPT.'
      },
      {
        nome: 'Validar dados, Preencher HL, 10 Maiores e Auditoria',
        area: 'Saúde',
        descricao: 'Validar dados, Preencher HL, 10 Maiores e Auditoria'
      },
      {
        nome: 'Correção e Ajustes',
        area: 'TI',
        descricao: 'Fazer eventuais correções'
      },
      {
        nome: 'Revisão Final',
        area: 'Saúde',
        descricao: 'Fazer a última revisão'
      },
      {
        nome: 'Pronto para o Cliente',
        area: 'N/A',
        descricao: 'Disponível para o cliente'
      },
      {
        nome: 'PPT em Pós Venda',
        area: 'TI',
        descricao: 'PPT disponível em Pós Venda'
      },
      {
        nome: 'Dados disponíveis no portal',
        area: 'TI',
        descricao: 'Disponibilidade dos dados no Portal Suridata'
      },
      {
        nome: 'Entregue - Reunião realizada',
        area: 'N/A',
        descricao: 'Concluído'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('processo', null, {});    
  }
};
