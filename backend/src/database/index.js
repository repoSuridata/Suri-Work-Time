const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
 
const Processo        = require('../models/Processo');
const Tempo           = require('../models/Tempo');
const Empresa         = require('../models/Empresa');
const Erro            = require('../models/Erro');
const OcorrenciaErro  = require('../models/OcorrenciaErro');
const RegraComentario = require('../models/RegraComentario');

const database = new Sequelize(dbConfig);

Processo.init(database);
Tempo.init(database);
Empresa.init(database);
Erro.init(database);
OcorrenciaErro.init(database);
RegraComentario.init(database);

RegraComentario.removeAttribute('id')         

Tempo.associate(database.models);
Tempo.removeAttribute('id')         

Processo.associate(database.models)

Erro.associate(database.models)

OcorrenciaErro.associate(database.models)
OcorrenciaErro.removeAttribute('id')         


module.exports = database;
