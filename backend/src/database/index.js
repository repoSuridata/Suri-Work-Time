const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Processo    = require('../models/Processo');
const Tempo       = require('../models/Tempo');
const Empresa     = require('../models/Empresa');
const Erro        = require('../models/Erro');
const ErroDetalhe = require('../models/ErroDetalhe');

const database = new Sequelize(dbConfig);

Processo.init(database);
Tempo.init(database);
Empresa.init(database);
Erro.init(database);
ErroDetalhe.init(database);

Tempo.associate(database.models);
Tempo.removeAttribute('id')         

Processo.associate(database.models)

ErroDetalhe.associate(database.models)


module.exports = database;
