var express = require('express');
var router = express.Router();

module.exports = function (cfg) {
  require('./usuarios')(router);
  router.get('/', (req, res) => {
    res.status(200).send('Yay!!!')
  });
	return router;
};
