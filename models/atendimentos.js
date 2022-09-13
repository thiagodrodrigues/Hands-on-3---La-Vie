const db = require("../database");
const { dataTypes } = require("sequelize");

const atendimentos = db.define(
    "atendimentos",
{
    idAtendimento: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    data_atendimento: {
        type: dataTypes.DATE,
        allowNull: true,
    },
    observacao: {
        type: dataTypes.STRING,
    },
    paciente_id: {
        type: dataTypes.INTEGER,
        allowNull: true,
    },
    psicologo_id: {
        type: dataTypes.INTEGER,
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
    
    
}
,
{
    tableName: "atendimentos",
}
);

module.exports = atendimentos;