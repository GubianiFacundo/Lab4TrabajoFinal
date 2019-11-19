module.exports = (db, sequelize, Sequelize) => {

  db.acciones = require('../models/acciones')(sequelize, Sequelize);
  db.escalamientos = require('../models/escalamientos')(sequelize, Sequelize);
  db.notificaciones = require('../models/notificaciones')(sequelize, Sequelize);
  db.incidencias = require('../models/incidencias')(sequelize, Sequelize);
  db.usuarios = require('../models/usuarios')(sequelize, Sequelize);

  db.incidencias.hasMany(db.acciones, {
    as: 'acciones',
    onDelete: 'cascade'
  });

  db.incidencias.hasMany(db.escalamientos, {
    as: 'escalamientos',
    onDelete: 'cascade'
  });

  db.incidencias.hasMany(db.notificaciones, {
    as: 'notificaciones',
    onDelete: 'cascade'
  });

  return db;
}