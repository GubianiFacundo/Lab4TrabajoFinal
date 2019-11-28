module.exports = function(app) {
	const escalamiento = require('../controllers/escalamientos.controller');
  app.post('/generarEscalamiento', escalamiento.generarEscalamiento);
};