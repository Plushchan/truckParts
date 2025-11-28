require('dotenv').config();
const Sequelize = require('sequelize');

const con = new Sequelize(process.env.DB_NAME ?? 'mydb',
    process.env.DB_USER ?? 'root',
    process.env.DB_PASSWORD ?? 'secret', {
        dialect: 'postgres',
        host: process.env.DB_HOST,
    }
);

module.exports = con;