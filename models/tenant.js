'use strict';
const {
  Model,
  UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.property, { foreignKey:"tenant_id"})
    }
  }
  tenant.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue:UUIDV4
    },
    username:{
    type: DataTypes.STRING,
    unique: {msg: "username not available"},
    allowNull:false,
    validate:{
      notEmpty: {msg : "username must not be empty"},
      notNull: {msg: "user must have a username"}
    }
    },
    email:{ 
    type: DataTypes.STRING,
  unique: {msg: "email already registered"},
  allowNull: false,
  validate:{
    isEmail: {msg: "enter a valid email address"},
    notEmpty: {msg: "user email must not be empty"},
    notNull: {msg : "user must have an email"}
  }
  },
    password:{ 
      type: DataTypes.STRING,
    allowNull: false,
    validate:{
      is: {
        notEmpty: {msg: "user password must not  be empty"},
        notNull: {msg: "use rmust have a password"}
      }
    }
    },
    ktp:{
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'tenant',
    freezeTableName: true
  });
  return tenant;
};