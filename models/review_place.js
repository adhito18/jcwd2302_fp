'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review_place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user,{foreignKey: "review_id"})
    }
  }
  review_place.init({
    review: DataTypes.STRING,
    decription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review_place',
    freezeTableName: true
  });
  return review_place;
};