const express = require('express')
const routes = express.Router()

/* routes.get('/gender', GenderController.listAll) -> Apenas deixei de exemplo */

routes.get('atendimentos', atendimentosController.listAtendimentos);
routes.get('atendimentos/:id', atendimentosController.getAtendimentoId);
routes.post('atendimentos', atendimentosController.postAtendimento);


module.exports = routes
