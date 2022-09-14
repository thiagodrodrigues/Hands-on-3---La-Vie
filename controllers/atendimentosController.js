const atendimentos = require('../models/atendimentos')

const atendimentosController = {

    async listAtendimentos (req, res) {

        const listaDeAtendimentos = await atendimentos.findAll();

        res.json(listaDeAtendimentos);
    
    },

    async getAtendimentoId (req, res) {

        const { idAtendimento } = req.params;

        await atendimentos.findAll();

        res.json (idAtendimento);
    },

    async postAtendimento (req, res) {
        const {paciente_id, data_atendimento, observacao} = req.body;

        const novoAtendimento = await atendimentos.create({
            paciente_id, data_atendimento, observacao
        });

        res.json (novoAtendimento)
    },
};

module.exports = atendimentosController;