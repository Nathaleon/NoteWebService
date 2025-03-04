import {Sequelize} from "sequelize";

const db = new Sequelize('tugascrud', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;