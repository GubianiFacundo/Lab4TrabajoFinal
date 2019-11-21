const Sequelize = require('sequelize');
var cfg = require('./config.json');
// const open = require('open');
// var jwt = require('jsonwebtoken');
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
// db.open = open;
// db.jwt = jwt;

require('../models/@asociaciones')(db, sequelize, Sequelize);

module.exports = db;
