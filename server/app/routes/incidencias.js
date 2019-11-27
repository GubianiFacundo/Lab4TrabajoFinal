module.exports = function(app) {
	const incidencia = require('../controllers/incidencia.controller');
  app.post('/generarIncidencia', incidencia.generarIncidencia);
  app.put('/modificarIncidencia/:id', incidencia.updateIncidencia);
  app.get('/listaIncidencia', incidencia.listaIncidencias);
	// app.put('/usuario/vincularCuenta', usuario.vincular);
	// app.post('/register', usuario.registrar);
	// // app.delete('/usuario/delete/:id', usuario.borrar);
	// app.put('/usuario/:id', usuario.modificar);
	// app.get('/usuarios', usuario.listaUsuario);
};
