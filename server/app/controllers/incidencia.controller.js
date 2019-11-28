const db = require('../config/db.config');
const cfg = require('../config/config');
const formDate = require('./formDate');
const notificaciones = require('./notificaciones.controller')
const acciones = require('./acciones.controller')
const op = db.Sequelize.Op;
const incidencia = db.incidencias;

var nroCrp = 1;
var idIncidencia = 'TTI';

exports.generarIncidencia = (req, res) => {
  console.log('A VEEEER')
  if (req.body) {
    db.usuarios.findOne({
      attributes: ['nombre'],
      where: {
        [op.and]: {
          nombre: req.body.nombre_user
        },
      }
    }).then(usuario => {
      console.log('DAAAAAAAAAAAAAAAAAAAAH')
      if (!usuario) {
        res.status(204).send('Usuario no encontrado !!!');
      } else {
        idIncidencia = idIncidencia + nroCrp.toString();
        db.incidencias.create({
          id: idIncidencia,
          titulo: req.body.titulo,
          descripcion: req.body.descripcion,
          fecha: formDate.format(new Date),
          importancia: req.body.importancia,
          estado: 'GENERADA',
          nombre_user: usuario.nombre
        }).then(async () => {
          await notificaciones.generarNotificion(idIncidencia, usuario.nombre, req.body.medio);
          await acciones.generarAccion(idIncidencia, 'NADA');
          // await this.updateIncidencia(idIncidencia, {
          //   estado: 'NOTIFICADA'
          // });
          res.status(200).json({
            id: idIncidencia,
            msg: 'Incidencia generada correctamente !!!'
          });
          nroCrp++;
          idIncidencia = 'TTI';
        }).catch(err => {
          res.status(409).send(err);
        });
      }
    });
  } else {
    res.status(401).send('Faltan variables !!!');
  }
}

exports.updateIncidencia = (req, res) => {
  console.log('ESTO ES EL REQ DE MODFI INCI: ', req)
  db.incidencias.update({
    titulo: req.body.titulo,
    desc: req.body.desc,
    fecha: formDate.format(new Date),
    importancia: req.body.importancia,
    estado: req.body.estado,
    nombre_user: req.body.nombre_user
  }, {
    // attributes: ['id', 'titulo', 'descripcion', 'fecha', 'importancia', 'estado', 'nombre_user'],
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.status(200).send('Incidencia modificada correctamente !!!');
    // return {
    //   status: 200,
    //   msg: 'Incidencia modificada correctamente !!!'
    // }
  }).catch(err => {
    res.status(409).send(err);
    // return {
    //   status: 409,
    //   ok: false,
    //   error: err
    // };
  });
}

exports.listaIncidencias = (req, res) => {
  var totalElement;
  // console.log('REQ SIN PARAMS', req)
  console.log('REQ CON PARAMS', req.query)
  db.incidencias.findAndCountAll({
    where: {
      [op.and]: {
        nombre_user: req.query.nombre_user,
        fecha: {
          [op.between]: [req.query.fechaIni, req.query.fechaFin]
        }
      },
    }
  }).then(p => {
    totalElement = p.count;
  }).catch(err => {
     return { msg: 'No count', status: 409, error: err };
  });
  db.incidencias.findAll({
    where: {
      [op.and]: {
        nombre_user: req.query.nombre_user,
        fecha: {
          [op.between]: [req.query.fechaIni, req.query.fechaFin]
        }
      },
    }
  }).then((result) => {
    res.status(200).json({
      totalElement: totalElement,
      content: result
    });
  }).catch((err) => {
    console.log(err)
    res.status(409).json(err);
  });
}