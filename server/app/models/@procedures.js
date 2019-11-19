module.exports = (db, sequelize, Sequelize) => {
  var dbName = 'tpLab4';

  function formatDate() {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  var date = formatDate();

  const dbGen = `SELECT 'CREATE DATABASE ${dbName}' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = '${dbName}')\gexec`

  const userGen = 'CREATE TABLE IF NOT EXISTS public.usuarios;'
  const accGen = 'CREATE TABLE IF NOT EXISTS public.acciones;'
  const escGen = 'CREATE TABLE IF NOT EXISTS public.escalamientos;'
  const incGen = 'CREATE TABLE IF NOT EXISTS public.incidencias;'
  const notGen = 'CREATE TABLE IF NOT EXISTS public.notificaciones;'
  const userAdmGen = `INSERT INTO usuarios (nombre, pass, fechaIni) VALUES ('admin', 'admin', ${date}) ON CONFLICT (id) DO NOTHING;`

  db.sequelize.query(
      dbGen, {
        type: sequelize.QueryTypes.RAW
      })
    .then(function (results) {
      console.log('Base de datos generada !!!. nombre: ', dbName)
    });

  db.sequelize.query(
      userGen, {
        type: sequelize.QueryTypes.RAW
      })
    .then(function (results) {
      console.log('Tabla usuarios generada !!!.')
    });

  db.sequelize.query(
      incGen, {
        type: sequelize.QueryTypes.RAW
      })
    .then(function (results) {
      console.log('Tabla incidencias generada !!!.')
    });

  db.sequelize.query(
      notGen, {
        type: sequelize.QueryTypes.RAW
      })
    .then(function (results) {
      console.log('Tabla notificaciones generada !!!.')
    });

  db.sequelize.query(
      accGen, {
        type: sequelize.QueryTypes.RAW
      })
    .then(function (results) {
      console.log('Tabla acciones generada !!!.')
    });

  db.sequelize.query(
      escGen, {
        type: sequelize.QueryTypes.RAW
      })
    .then(function (results) {
      console.log('Tabla escalamientos generada !!!.')
    });

  db.sequelize.query(
      userAdmGen, {
        type: sequelize.QueryTypes.RAW
      })
    .then(function (results) {
      console.log('Insert admin/admin en tabla usuarios !!!.')
    });

  return db;
}