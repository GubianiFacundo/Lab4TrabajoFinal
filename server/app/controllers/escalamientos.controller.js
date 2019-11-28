const db = require('../config/db.config');
const config = require('../config/config');
const formDate = require('./formDate');
const op = db.Sequelize.Op;

exports.generarEscalamiento = function (req, res) {
  db.escalamientos.create({
    id_incidencia: req.body.id_incidencia,
    a_quien: req.body.a_quien,
    fecha: formDate.format(new Date),
    estado: req.body.estado
  }).then(() => {
    res.status(200).send('Escalamiento generado correctamente !!!');
  }).catch(err => {
    res.status(409).send('Error: ', err)
  })
}