'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class city extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.location, {foreignKey: "city_id"})
    }
  }
  city.init({
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'city',
    freezeTableName: true
  });
  return city;
};