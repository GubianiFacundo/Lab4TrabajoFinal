module.exports = function(app) {
	const notificacion = require('../controllers/notificaciones.controller');
  app.post('/generarNotificacion', notificacion.generarNotificion);
};