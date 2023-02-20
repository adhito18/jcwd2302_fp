'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event_rate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.event, {foreignKey: "event_rate_id"})
    }
  }
  event_rate.init({
    discount: DataTypes.INTEGER,
    markup: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event_rate',
    freezeTableName: true
  });
  return event_rate;
};