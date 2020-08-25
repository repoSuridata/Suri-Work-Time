const express = require("express");

const ProcessoController = require("./controllers/ProcessoController");
const TempoController = require("./controllers/TempoController");
const EmpresaController = require("./controllers/EmpresaController");
const OcorrenciaErroController = require("./controllers/OcorrenciaErroController");
const ErroController = require("./controllers/ErroController");
const RegraComentarioController = require("./controllers/RegraComentarioController");

const routes = express.Router();

routes.post("/processo", ProcessoController.create);
routes.post("/tempo", TempoController.create);
routes.post("/ocorrencia_erro", OcorrenciaErroController.create);
routes.post("/erro", ErroController.create);
routes.post("/regra_comentario", RegraComentarioController.create);

routes.get("/empresa", EmpresaController.list);
routes.get("/processo", ProcessoController.list);
routes.get("/tempo", TempoController.list);
routes.get("/ocorrencia_erro", OcorrenciaErroController.list);
routes.get("/erro", ErroController.list);
routes.get("/regra_comentario", RegraComentarioController.list);

module.exports = routes;
