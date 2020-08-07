const express = require('express');
const ProcessoController = require('./controllers/ProcessoController')
const TempoController = require('./controllers/TempoController');
const EmpresaController = require('./controllers/EmpresaController');


const routes = express.Router();

routes.post('/processo', ProcessoController.create);
routes.post('/tempo', TempoController.create);

routes.get('/empresa', EmpresaController.list);
routes.get('/processo', ProcessoController.list);



module.exports = routes;
