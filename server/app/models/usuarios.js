/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaIni: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    tableName: 'usuarios'
  });
};
