/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('incidencias', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    importancia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'GENERADA'
    }
  }, {
    tableName: 'incidencias'
  });
};
