const express = require('express');

const ProcessoController = require('./controllers/ProcessoController')
const TempoController    = require('./controllers/TempoController');
const EmpresaController  = require('./controllers/EmpresaController');
const ErroController     = require('./controllers/ErroController');


const routes = express.Router();

routes.post('/processo', ProcessoController.create);
routes.post('/tempo', TempoController.create);
routes.post('/erro', ErroController.create);

routes.get('/empresa', EmpresaController.list);
routes.get('/tempo', TempoController.list);



module.exports = routes;
