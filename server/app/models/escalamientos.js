/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('escalamientos', {
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
    aQuien: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'escalamientos'
  });
};
