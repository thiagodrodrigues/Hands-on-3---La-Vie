const Sequelize = require("sequelize");
const DB_NAME = "lavie";
const DB_USER = "root";
const DB_PASS = "root";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: 3306, /* Verificar se a porta é essa mesmo =D */
};
// objeto para guardar a conexão do banco dados
let db = {};
try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.log(error);
  console.error("Error ao tentar uma conexão com banco dados");
}
async function hasConection() {
  try {
    await db.authenticate();
    console.log("Banco dados conectado!");
  } catch (error) {
    console.log(error);
    console.error("Erro ao tentar se conectar ao banco de dados");
  }
}
Object.assign(db, {
  hasConection,
}); //db.hasConection = hasConection
module.exports = db;
