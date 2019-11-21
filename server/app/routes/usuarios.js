module.exports = function(app) {
	const usuario = require('../controllers/usuarios.controller');
	app.post('/login', usuario.login);
	app.put('/usuario/vincularCuenta', usuario.vincular);
	app.post('/register', usuario.registrar);
	// app.delete('/usuario/delete/:id', usuario.borrar);
	app.put('/usuario/:id', usuario.modificar);
	app.get('/usuarios', usuario.listaUsuario);
};
