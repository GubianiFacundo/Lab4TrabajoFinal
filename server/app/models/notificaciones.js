/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notificaciones', {
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
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    aQuien: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medio: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'notificaciones'
  });
};
