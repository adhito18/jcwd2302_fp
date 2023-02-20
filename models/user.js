'use strict';
const {
  Model, UUIDV4
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.transaction, { foreignKey:"user_id"})
      this.hasMany(models.review_place, {foreignKey:"review_id"})
    }
  }
  user.init({
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
    profilpicture:{
      type: DataTypes.STRING,
      allowNull: false
    },
    isverify:{
      type: DataTypes.STRING,
      allowNull: false
    },
    gender:{
      type: DataTypes.STRING,
      allowNull: false
    },
    birth_date:{
      type: DataTypes.STRING,
      allowNull: false
    },
    isverify:{
      type: DataTypes.STRING,
      allowNull: false
    },
    phonenumber:{
      type: DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'user',
    freezeTableName: true
  });
  return user;
};