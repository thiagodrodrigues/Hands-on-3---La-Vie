const db = require("../database");
const { DataTypes } = require("sequelize");

const atendimentos = db.define(
    "atendimentos",
{
    idAtendimento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    data_atendimento: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    observacao: {
        type: DataTypes.STRING,
    },
    paciente_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    psicologo_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    
    
}
,
{
    tableName: "atendimentos",
}
);

module.exports = atendimentos;