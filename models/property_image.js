'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class property_image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.property, {foreignKey: "property_id"})
    }
  }
  property_image.init({
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'property_image',
    freezeTableName: true,
    timestamps: false
  });
  return property_image;
};