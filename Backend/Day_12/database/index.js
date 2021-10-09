const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  /*
    name, 
    user, 
    password
    */

  "devs",
  "postgres",
  "Samsung@123",
  {
    host: "localhost",
    dialect: "mongo", //mySql can be also written.
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
