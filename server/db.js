import { Sequelize } from "sequelize";

// module.exports = new Sequelize (
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASS,
//   {
//     dialect: "postgres",
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT
//   }
// )
const sequelize = new Sequelize (
  process.env.DB_NAME,
  "postgres" ,
  "FaQDBSxm",
  {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
  }
)

export default sequelize;
