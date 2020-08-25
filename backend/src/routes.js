const express = require('express');

const ProcessController        = require('./controllers/ProcessController')
const TimeController            = require('./controllers/TimeController');
const CompanyController         = require('./controllers/CompanyController');
const ErrorOccurrenceController  = require('./controllers/ErrorOccurrenceController');
const ErrorController            = require('./controllers/ErrorController');
const RuleCommentaryController = require('./controllers/RuleCommentaryController');

const routes = express.Router();


// Rotas de Processos ===========================================================
routes.post('/process', ProcessController.create);

// Rotas de Tempo ===============================================================
routes.post('/time', TimeController.create);
routes.get('/time', TimeController.list);
routes.get('/time/:company', TimeController.list);

// Rotas de Ocorrencias de Erros ================================================
routes.post('/error_occurrence', ErrorOccurrenceController.create);
routes.get('/error_occurrence', ErrorOccurrenceController.list);

// Rotas de Erros ===============================================================
routes.post('/error', ErrorController.create);
routes.get('/error', ErrorController.list);

// Rotas de Regras e Comentários ================================================
routes.post('/commentary_rule', RuleCommentaryController.create);
routes.get('/commentary_rule', RuleCommentaryController.list);

// Rotas de Empresas ============================================================
routes.get('/company', CompanyController.list);


module.exports = routes;
