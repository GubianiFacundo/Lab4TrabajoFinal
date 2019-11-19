/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acciones', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idIncidencia: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'incidencias',
        key: 'id'
      }
    },
    tipoAccion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'acciones'
  });
};
