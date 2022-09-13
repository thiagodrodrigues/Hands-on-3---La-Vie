const db = require ('../database/index');
const sequelize = require ('sequelize');

const pacientes = db.define ('pacientes',{
    id_paciente: {
      type: sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: sequelize.DataTypes.STRING
    },
    email: {
      type: sequelize.DataTypes.STRING
    },
    data_nascimento: {
      type: sequelize.DataTypes.DATE
    },
    createdAt : {
      type: sequelize.DataTypes.DATE
    },
    updatedAt : {
        type: sequelize.DataTypes.DATE
    }
  },
  {
    tableName: "pacientes"
  }
);

module.exports = pacientes
