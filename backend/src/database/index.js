const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const Processo = require('../models/Processo');
const Tempo = require('../models/Tempo');
const Empresa = require('../models/Empresa');

const database = new Sequelize(dbConfig);

Processo.init(database);
Processo.removeAttribute('id');

Tempo.init(database);
Tempo.removeAttribute('id');

Empresa.init(database);
Empresa.removeAttribute('id');

module.exports = database;