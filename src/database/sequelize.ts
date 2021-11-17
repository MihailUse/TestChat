import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelizeDB = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: <Dialect>process.env.DB_DRIVER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
});

export default sequelizeDB;