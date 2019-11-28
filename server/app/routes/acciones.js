module.exports = function(app) {
	const accion = require('../controllers/acciones.controller');
  app.post('/generarAccion', accion.generarAccionEsc);
};