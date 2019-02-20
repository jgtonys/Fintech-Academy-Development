/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_id: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    user_name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    user_password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_type: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    user_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    tableName: 'user'
  });
};
