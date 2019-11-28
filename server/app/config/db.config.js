const Sequelize = require('sequelize');
const config = require('./config');

const sequelize = new Sequelize(config.db.DB, config.db.USER, config.db.PASS, {
	dialect: config.dialect,
	host: config.db.HOST,
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
