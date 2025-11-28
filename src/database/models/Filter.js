const { DataTypes } = require('sequelize');
const con = require("../db");

const Filter = con.define('filter', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Filter;