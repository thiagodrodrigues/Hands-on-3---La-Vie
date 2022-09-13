const db = require("../database");
const { dataTypes } = require("sequelize");

const pacientes = db.define(
    "pacientes",
{
    idPaciente: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    nome: {
        type: dataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: dataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    data_nascimento: {
        type: dataTypes.DATE,
    },
    status: {
        type: dataTypes.STRING,
        allowNull: true,
    },
    createAt: {
        type: dataTypes.DATE,
        allowNull: true,
    },
    updateAt: {
        type: dataTypes.DATE,
        allowNull: true,
    },
    
    
},
{
    tableName: "pacientes",
}
);

module.exports = pacientes;