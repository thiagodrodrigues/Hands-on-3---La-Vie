const Atendimentos = require("../models/atendimentos");

const atendimentosController = {
    async listarAtendimentos (req,res){
        try {
        let array = [];
        const listaDeAtendimentos = await Atendimentos.findAll({
        });

        if(listaDeAtendimentos.length==0){
            return res.status(400).json(array);
        }
        res.status(200).json(listaDeAtendimentos);

        } catch (error) {
            console.error(error);
            res.status(400).send("Houve um erro.")
        }
    },

    async listaAtendimentoID(req,res){
        try {
            const { id } = req.params;
            const referenciaAtendimento = await Atendimentos.findOne({
                where:{
                    idAtendimento : id
                }
            });

            if(!referenciaAtendimento){
                return res.status(404).send("ID do atendimento não foi encontrado.")
            } else {
                return res.status(200).json(referenciaAtendimento);}
        } catch (error) {
            console.error(error);
            return res.status(400).send("Ocorreu um erro.");
        };
    },

    async cadastrarAtendimento(req,res){
        try {
            const {paciente_id, data_atendimento, observacao} = req.body;

            const novoAtendimento = await Atendimentos.create({
                paciente_id,
                data_atendimento,
                observacao,
            });
            return res.status(201).json(novoAtendimento);
        } catch (error) {
            console.error(error);
            res.status(404).send("Ocorreu um erro.");
        };
    },

};

module.exports = atendimentosController;