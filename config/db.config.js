// const { Sequelize } = require("sequelize");
// const dotenv = require("dotenv");

// dotenv.config({ path: ".env.dev" });

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USERNAME,
//   process.env.DB_PASSWORD,
//   {
//     host: "localhost",
//     dialect: "mysql",
//     logging: false,
//   },
// );

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("DB connection successfull!");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database", error);
//   });

// module.exports= sequelize

module.exports = {
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: "mysql",
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
}