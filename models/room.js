'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.transaction, { foreignKey:"room_id"})
      this.hasMany(models.room_image, {foreignKey:"room_id"})
      this.belongsTo(models.property, {foreignKey:"property_id"})
      this.belongsTo(models.event, {foreignKey: "event_id"})
    }
  }
  room.init({
    type: DataTypes.STRING,
    price: DataTypes.INTEGER,
    total_room: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'room',
    freezeTableName: true,
    timestamps:true,
    createdAt: false,
    updatedAt: true
  });
  return room;
};