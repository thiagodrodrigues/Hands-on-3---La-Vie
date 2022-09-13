const db = require("../database");
const { dataTypes } = require("sequelize");

const psicologos = db.define(
    "psicologos",
{
    idPsicologo: {
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
    senha: {
        type: dataTypes.STRING,
        allowNull: true,
    },
    apresentacao: {
        type: dataTypes.STRING,
        allowNull: true,
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
    tableName: "psicologos",
}
);

module.exports = psicologos;