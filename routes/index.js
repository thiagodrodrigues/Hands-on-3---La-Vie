const express = require('express')
const authController = require('../controllers/acessoLogin');
const validacaologin = require('../validators/login');
const routes = express.Router()

/* routes.get('/gender', GenderController.listAll) -> Apenas deixei de exemplo */

routes.post("/login", validacaologin, authController.login);

routes.get('atendimentos', atendimentosController.listAtendimentos);
routes.get('atendimentos/:id', atendimentosController.getAtendimentoId);
routes.post('atendimentos', atendimentosController.postAtendimento);

module.exports = routes

