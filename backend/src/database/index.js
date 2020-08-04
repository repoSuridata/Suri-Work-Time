const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const Processo = require('../models/Processo');
const Tempo = require('../models/Tempo');
const Companies = require('../models/Companies');

const database = new Sequelize(dbConfig);

Processo.init(database);
Processo.removeAttribute('id');

Tempo.init(database);
Tempo.removeAttribute('id');

Companies.init(database);
Companies.removeAttribute('d');

module.exports = database;