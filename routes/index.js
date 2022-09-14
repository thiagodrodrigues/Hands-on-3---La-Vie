const express = require('express')
const authController = require('../controllers/acessoLogin');
const pacientesController = require('../controllers/pacientesController');
const validatePaciente = require('../validators/paciente')
const validacaologin = require('../validators/login');
const routes = express.Router()


//routes do login
routes.post("/login", validacaologin, authController.login);


//routes do atendimento

routes.get('/atendimentos', atendimentosController.listAtendimentos);
routes.get('/atendimentos/:id', atendimentosController.getAtendimentoId);
routes.post('/atendimentos', atendimentosController.postAtendimento);

//routes do paciente

routes.get('/pacientes', pacientesController.listarPacientes);
routes.post('/paciente', validatePaciente, pacientesController.cadastrarPaciente);
routes.get('/paciente/:id', pacientesController.listarPacienteID);
routes.delete('/paciente/:id', pacientesController.deletarPaciente);
routes.put('/paciente/:id', pacientesController.atualizarPaciente);


module.exports = routes
