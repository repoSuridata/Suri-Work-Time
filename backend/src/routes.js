const express = require('express');

const ProcessController        = require('./controllers/ProcessController')
const TimeController            = require('./controllers/TimeController');
const CompanyController         = require('./controllers/CompanyController');
const ErrorOccurrenceController  = require('./controllers/ErrorOccurrenceController');
const ErrorController            = require('./controllers/ErrorController');
const RuleCommentaryController = require('./controllers/RuleCommentaryController');

const routes = express.Router();

routes.post('/process', ProcessController.create);
routes.post('/time', TimeController.create);
routes.post('/error_occurrence', ErrorOccurrenceController.create);
routes.post('/error', ErrorController.create);
routes.post('/commentary_rule', RuleCommentaryController.create);

routes.get('/company', CompanyController.list);
routes.get('/time', TimeController.list);
routes.get('/error_occurrence', ErrorOccurrenceController.list);
routes.get('/error', ErrorController.list);
routes.get('/commentary_rule', RuleCommentaryController.list);

module.exports = routes;
