/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('escalamientos', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_incidencia: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'incidencias',
        key: 'id'
      }
    },
    a_quien: {
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
    tableName: 'escalamientos',
    timestamps: false
  });
};
