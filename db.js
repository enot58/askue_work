import {Sequelize} from "sequelize";
import {config} from "dotenv";

config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    port: process.env.PORT,
    dialect: "mysql",
    define: {

    }
})

export default sequelize