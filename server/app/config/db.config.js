const Sequelize = require('sequelize');
var cfg = require('./config.json');

var sequelize = new Sequelize(cfg.db.DB, cfg.db.USER, cfg.db.PASS, {
	dialect: cfg.dialect,
	host: cfg.db.HOST,
	dialectOptions: {
		useUTC: false, // for reading from database
	},
	timezone: 'Etc/GMT0',
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

require('../models/@asociaciones')(db, sequelize, Sequelize);

module.exports = db;
