const express = require('express');

const ProcessoController        = require('./controllers/ProcessoController')
const TempoController           = require('./controllers/TempoController');
const EmpresaController         = require('./controllers/EmpresaController');
const ErroController            = require('./controllers/ErroController');
const RegraComentarioController = require('./controllers/RegraComentarioController');


const routes = express.Router();

routes.post('/processo', ProcessoController.create);
routes.post('/tempo', TempoController.create);
routes.post('/erro', ErroController.create);
routes.post('/regra_comentario', RegraComentarioController.create);

routes.get('/empresa', EmpresaController.list);
routes.get('/tempo', TempoController.list);
routes.get('/erro', ErroController.list);
routes.get('/regra_comentario', RegraComentarioController.list);



module.exports = routes;
