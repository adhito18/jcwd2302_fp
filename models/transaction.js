'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {foreignKey: "user_id"})
      this.hasMany(models.room, {foreignKey:"room_id"})
      this.hasMany(models.transaction_history,{foreignKey:"history_id"})
      this.hasMany(models.status, {foreignKey:"status_id"})
    }
  }
  transaction.init({
    reservation: DataTypes.STRING,
    reservation_location: DataTypes.STRING,
    room_price: DataTypes.INTEGER,
    room_name: DataTypes.STRING,
    total_room: DataTypes.INTEGER,
    total_price: DataTypes.INTEGER,
    exp: DataTypes.DATE,
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transaction',
    freezeTableName: true
  });
  return transaction;
};