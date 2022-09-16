const express = require('express')
const routes = express.Router()
const atendimentosController = require ("../controllers/atendimentosController");

/* routes.get('/gender', GenderController.listAll) -> Apenas deixei de exemplo */

routes.get('/atendimentos', atendimentosController.listarAtendimentos);
routes.get('/atendimentos/:id', atendimentosController.listaAtendimentoID);
routes.post('/atendimentos', atendimentosController.cadastrarAtendimento); 


module.exports = routes
