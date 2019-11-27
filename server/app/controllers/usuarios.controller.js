const db = require('../config/db.config');
const cfg = require('../config/config.json');
const formDate = require ('./formDate');
const op = db.Sequelize.Op;
const usuario = db.usuarios;


exports.init = (req, res) => {
	usuario.create({
		usuario: 'admin',
		pass: 'admin'
	});
	
	return res.send('Usuario admin/admin creado');
};

exports.login = (req, res) => {
	if (typeof req.body != 'undefined' && typeof req.body.usuario != 'undefined' && typeof req.body.pass != 'undefined') {
		db.usuarios.findOne({
			attributes: ['nombre', 'pass'],
			where: {
				[op.and]: { pass: req.body.pass, nombre: req.body.usuario },
			},
		}).then(usuario => {
			if (!usuario) {
				res.status(204).json(null);
			} else {
				res.status(200).json(usuario);
			}
		});
	} else {
		res.status(401).send('Faltan variables');
	}
};
exports.vincular = (req, res) => {
	if (typeof req.body != 'undefined' && typeof req.body.meli_id != 'undefined' && typeof req.body.usu_id != 'undefined') {
		db.usuarios.update({
			user_id: req.body.meli_id,
		}, {
			where: {
				usu_id: req.body.usu_id,
			},
		}).then(() => {
			res.status(201).send(true);
		}).catch(() => {
			res.status(409).send(false);
		});
	} else {
		res.status(401).send('Faltan variables');
	}
};
exports.registrar = (req, res) => {
	if (req.body && req.body.usuario && req.body.pass && req.body.rol) {
		db.usuarios.create({
			nombre: req.body.usuario,
			pass: req.body.pass,
      rol_id: req.body.rol,
      fecha_ini: formDate.format(new Date),
      fecha_fin: null
		}).then(() => {
			res.status(201).send('Usuario generado correctamente !!!');
		}).catch(err => {
			res.status(409).send(err);
		});
	} else {
		res.status(401).send('Faltan variables !!!');
	}
};
// exports.borrar = (req, res) => {

// }
exports.modificar = (req, res) => {
	if (req.body && req.params.id) {
		db.usuarios.update(req.body, {
			where: {
				usu_id: req.params.id,
			},
		}).then(() => {
			res.status(202).json({
				ok: true,
				mensaje: 'Se modifico el usuario ' + req.params.id,
			});
		}).catch(err => {
			res.status(409).send(err);
		});
	} else {
		res.status(401).send('Faltan variables');
	}
};
exports.listaUsuario = (req, res) => {
	db.usuarios.findAll({
		attributes: ['id', 'nombre', 'fecha_ini', 'fecha_fin', 'rol_id'],
	}).then(result => {
		res.status(200).json(result);
	}).catch(err => {
    res.status(401).send(err)
  });
};
exports.listaUsuarioAsignar = (req, res) => {
	db.usuarios.findAll({
    attributes: ['id', 'nombre', 'fecha_ini', 'fecha_fin', 'rol_id'],
    where: {
      fecha_fin: {
        [op.or]: {
          [op.lt]: formDate.format(new Date),
          [op.is]: null,
        },
      },
    },
	}).then(result => {
		res.status(200).json(result);
	}).catch(err => {
    res.status(401).send(err)
  });
};

