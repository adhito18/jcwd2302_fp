'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.status, {foreignKey: "event_id"})
      this.belongsTo(models.event_rate, {foreignKey: "event_rate_id"})
      this.hasMany(models.room, {foreignKey: "event_id"})
    }
  }
  event.init({
    name: DataTypes.STRING,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'event',
    freezeTableName: true
  });
  return event;
};