const db = require('../config/db.config');
const config = require('../config/config');
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

exports.generarAccionEsc = async function (req, res) {
  db.acciones.create({
    id_incidencia: req.body.id_incidencia,
    tipo_accion: req.body.tipo_accion,
    fecha: formDate.format(new Date),
  }).then(() => {
    res.status(200).send('Acción generada correctamente !!!');
  }).catch(err => {
    res.status(409).send('Error: ', err)
  })
}