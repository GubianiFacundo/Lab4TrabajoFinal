module.exports = function(app) {
	const incidencia = require('../controllers/incidencia.controller');
  app.post('/generarIncidencia', incidencia.generarIncidencia);
  app.put('/modificarIncidencia/:id', incidencia.updateIncidencia);
  app.get('/listaIncidencia', incidencia.listaIncidencias);

};
