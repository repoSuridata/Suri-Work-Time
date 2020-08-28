const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
 
const Process         = require('../models/Process');
const Time            = require('../models/Time');
const Company         = require('../models/Company');
const Error           = require('../models/Error');
const ErrorOccurrence = require('../models/ErrorOccurrence');
const RuleCommentary  = require('../models/RuleCommentary');

const database = new Sequelize(dbConfig);

Process.init(database);
Time.init(database);
Company.init(database);
Error.init(database);
ErrorOccurrence.init(database);
RuleCommentary.init(database);

RuleCommentary.removeAttribute('id')         

Time.associate(database.models);
Time.removeAttribute('id')         

Process.associate(database.models)

Error.associate(database.models)

ErrorOccurrence.associate(database.models)
ErrorOccurrence.removeAttribute('id')     

module.exports = database;
