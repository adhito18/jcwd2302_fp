'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.room, { foreignKey:"property_id",as: "availableroom"})
      this.hasMany(models.property_image, {foreignKey:"property_id", as: "image"})
      this.hasMany(models.tenant, {foreignKey:"tenant_id"})
      this.hasMany(models.location,{foreignKey:"location_id"})
    }
  }
  property.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'property',
    freezeTableName: true,
    timestamps:false
  });
  return property;
};