const express = require('express');
const ProcessoController = require('./controllers/ProcessoController')
const TempoController = require('./controllers/TempoController')


const routes = express.Router();

routes.post('/processo', ProcessoController.create);
routes.post('/tempo', TempoController.create);
// routes.post('/companies', TempoController.create);

module.exports = routes;
