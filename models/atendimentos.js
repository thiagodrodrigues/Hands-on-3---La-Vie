const db = require("../database");
const { DataTypes } = require("sequelize");
const pacientes = require("./pacientes");
const psicologos = require("./psicologos");

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
        references: {
            model: pacientes,
            key: "idPaciente",
        }
    },
    psicologo_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: psicologos,
            key: "idPsicologo",
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    updatedAt: {
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