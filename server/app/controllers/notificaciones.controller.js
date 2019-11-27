const db = require('../config/db.config');
const cfg = require('../config/config.json');
const formDate = require('./formDate');
const op = db.Sequelize.Op;

exports.generarNotificion = async function (idIncidencia, nombre_user, medio) {
  db.notificaciones.create({
    id_incidencia: idIncidencia,
    fecha: formDate.format(new Date),
    a_quien: nombre_user,
    medio: medio,
  }).then(() => {
    return {
      status: 201,
      msg: 'Notificación generada correctamente !!!'
    }
  }).catch(err => {
    return {
      status: 409,
      ok: false,
      error: err
    };
  })
}