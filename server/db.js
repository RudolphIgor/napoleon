import { Sequelize } from "sequelize";

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
