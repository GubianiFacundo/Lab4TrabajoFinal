const db = require('../config/db.config');
const cfg = require('../config/config.json');
const formDate = require('./formDate');
const op = db.Sequelize.Op;

exports.generarAccion = async function (idIncidencia, tipo_accion) {
  db.acciones.create({
    id_incidencia: idIncidencia,
    tipo_accion: tipo_accion,
    fecha: formDate.format(new Date),
  }).then(() => {
    return {
      status: 201,
      msg: 'Acción generada correctamente !!!'
    }
  }).catch(err => {
    return {
      status: 409,
      ok: false,
      error: err
    };
  })
}