var express = require('express');
var config = require('./config/config');
var app = express();

// var cors = require('cors');
// var morgan = require('morgan');
// var bodyparser = require('body-parser');
// const http = require('http');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(bodyparser.urlencoded({
//   extended: false
// }));
// app.use(bodyparser.json());
// app.use(morgan('dev'));

// app.use('/', express.static(path.join(__dirname, '../app/dist/')));
// app.use(cors());

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

const db = require('./config/db.config');
console.log('veamos')

db.sequelize.sync({
  force: true,
  logging: console.log('estoy ¿?')
}).then(function () {
  console.log('Drop y recreado de tablas en proceso... !!!')
  db.usuarios.findOne({
    where: {
      usuario: 'admin',
    },
  }).then(usu => {
    if (usu == null) {
      db.usuarios.create({
        usuario: 'admin',
        pass: 'admin',
        rol_id: 'JEF',
      });
    }
    console.log('DB creada con éxito. Usuario admin/admin generado con éxito')
  }).catch(err => {
    console.log('SALIÓ TODO MAL !!!: ', err);
  });
}).catch(err => {
  console.log('SALIÓ TODO MAL 2 !!!: ', err);
});

let router = require('./routes/router')(config);

router.get('/', (req, res) => {
  res.status(200).send('Yay!!!')
});

app.use('/api', router);
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// let server = http.createServer(app);

app.listen(config.puerto, config.listenOn, () => {
  console.log(`Server corriendo en el puerto ${config.puerto}, I'm up bro yay!!! ;)`);
}).on('error', (e) => {
  console.error(`Error al iniciar el server (puerto ${config.puerto})`);
});