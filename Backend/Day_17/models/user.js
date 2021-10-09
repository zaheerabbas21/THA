const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

//User is an Table Name
const User = sequelize.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
      //enum: ["user", "admin", "superadmin"],
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
  },
  {
    timeStamps: true,
  }
);

module.exports = User;
