const { Sequelize } = require("sequelize");
const {
  sequelize_username,
  sequelize_database,
  sequelize_dialect,
  sequelize_host,
  sequelize_password,
} = require("../config/index");

const sequelize = new Sequelize(
  /*
    name, 
    user, 
    password
    */

  sequelize_database,
  sequelize_username,
  sequelize_password,
  {
    host: sequelize_host,
    dialect: sequelize_dialect, //mySql can be also written.
  }
);

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database.");
  }
})();

module.exports = sequelize;
