var express = require('express');
var cors = require('cors');
var app = express();
var morgan = require('morgan');
var cfg = require('./config/config.json');
var bodyparser = require('body-parser');
const path = require('path');
// const db = require('./config/db.config');
const http = require('http');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname, '../app/dist/')));
app.use(cors());

app.use(function (req, res, next) {
	// Headers para definir.
	res.setHeader('Access-Control-Allow-Origin', '*');
	// Acciones que permitimos.
	res.setHeader(
		'Access-Control-Allow-Methods',
		'GET, POST, OPTIONS, PUT, PATCH, DELETE',
	);
	// si estamos logueados
	res.setHeader('Access-Control-Allow-Credentials', 'true');
	res.setHeader('Access-Control-Allow-Headers', 'x-auth, Content-Type');
	// Se pone true si por ejemplo queremos cookies en las requests
	// res.setHeader('Access-Control-Allow-Credentials', true);
	// Con next() pasamos de este middleware a lo siguiento
	next();
});

// *********************************

// db.sequelize.sync().then(() => {
// 	db.usuarios.findOne({
// 		where: {
// 			usuario: 'ADMIN',
// 		},
// 	}).then(usu => {
// 		if (usu == null) {
// 			db.usuarios.create({
// 				usuario: 'ADMIN',
// 				pass: '73acd9a5972130b75066c82595a1fae3',
// 				rol_id: 'ADM',
// 			});
// 		}
// 	});

// 	console.log('Se crearon las tablas');
// });


let router = require('./routes/router')(cfg);
app.use('/api', router);
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

let server = http.createServer(app);
server.setTimeout(15 * 60 * 1000); // (15min)
server.listen(cfg.puerto, () => {
	console.log(`Server corriendo en el puerto ${cfg.puerto}, I'm up bro yay!!! ;)`);
}).on('error', (e) => {
	console.error(`Error al iniciar el server (puerto ${cfg.puerto})`);
});
