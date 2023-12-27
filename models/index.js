"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const dotenv = require("dotenv");
const db_config = require('../config/db.config.js')

dotenv.config({ path: ".env.dev" });
const basename = path.basename(__filename);
const db = {};


const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  db_config
);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === "js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;

db.User = require("./user.model.js")(sequelize, Sequelize);
db.Car = require("./car.model.js")(sequelize,Sequelize)
db.userType = require('./userType.model.js')(sequelize,Sequelize)

module.exports = db;
