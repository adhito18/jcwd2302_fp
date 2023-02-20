'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.transaction, {foreignKey:"history_id"})
    }
  }
  transaction_history.init({
    history: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'transaction_history',
    freezeTableName: true
  });
  return transaction_history;
};