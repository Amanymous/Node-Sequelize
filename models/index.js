const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize("testing_db", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
  //   logging: (...msg) => console.log(msg),
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (err) {
  console.error("Unable to connect to the database:", err);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user")(sequelize, DataTypes);
db.contact = require("./contact")(sequelize, DataTypes);
db.sequelize.sync({ force: false });
console.log("aman");
module.exports = db;
