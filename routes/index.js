const express = require('express')
const routes = express.Router()
const psicologosController = require ("../controllers/psicologosController");
/* routes.get('/gender', GenderController.listAll) -> Apenas deixei de exemplo */
routes.get("/psicologos", psicologosController.listarPsicologos)

module.exports = routes
