'use strict';
const {
  Model
} = require('sequelize');
const property = require('./property');
module.exports = (sequelize, DataTypes) => {
  class location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.property, {foreignKey:"location_id"})
    }
  }
  location.init({
    location: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'location',
  });
  return location;
};