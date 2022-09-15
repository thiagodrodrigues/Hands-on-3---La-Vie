const express = require('express')
const authController = require('../controllers/acessoLogin');
const pacientesController = require('../controllers/pacientesController');
const validatePaciente = require('../validators/paciente')
const validacaologin = require('../validators/login');
const validacaoPsicologos = require('../validators/psicologo');
const routes = express.Router()
const psicologosController = require ("../controllers/psicologosController");


//routes do psicologo
routes.get("/psicologos", psicologosController.listarPsicologos);
routes.post("/psicologos", validacaoPsicologos, psicologosController.cadastrarPsicologos);
routes.get("/psicologos/:id", psicologosController.listarPsicologoID);
routes.put("/psicologos/:id", psicologosController.atualizarPsicologo);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);



//routes do login
routes.post("/login", validacaologin, authController.login);


//routes do atendimento

/* routes.get('/atendimentos', atendimentosController.listAtendimentos);
routes.get('/atendimentos/:id', atendimentosController.getAtendimentoId);
routes.post('/atendimentos', atendimentosController.postAtendimento); */

//routes do paciente

routes.get('/pacientes', pacientesController.listarPacientes);
routes.post('/pacientes', validatePaciente, pacientesController.cadastrarPaciente);
routes.get('/pacientes/:id', pacientesController.listarPacienteID);
routes.delete('/pacientes/:id', pacientesController.deletarPaciente);
routes.put('/pacientes/:id', pacientesController.atualizarPaciente);


module.exports = routes
