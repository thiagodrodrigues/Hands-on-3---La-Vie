const Psicologos = require("../models/psicologos");
const bcrypt = require("bcryptjs");
const psicologo = require("../models");

const psicologosController = {
    listarPsicologos: async (req, res) => {
        try {
            let array = []
            const listaDePsicologos = await Psicologos.findAll({
            });

            if (listaDePsicologos.length == 0) {
                return res.status(200).json(array)
            }
            res.status(200).json(listaDePsicologos);

        } catch (error) {
            console.error(error);
            res.status(500).send(error)
        }
    },

    cadastrarPsicologos: async (req, res) => {
        const { nome, email, senha, apresentacao } = req.body;
        const salt = "security"
        try {
            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(senha, salt, async function (err, hash) {

                    const newUser = await Psicologos.create({
                        email,
                        senha: hash,
                        nome,
                        apresentacao
                    });
                    return res.status(201).send({
                        id: newUser.idPsicologo,
                        nome,
                        email,
                        apresentacao
                    });
                });
            });
        } catch (error) {
        }
    },

    listarPsicologoID: async (req, res) => {
        try {
            const { id } = req.params;
            const psicologoSalvo = await Psicologos.findOne({
                where: {
                    idPsicologo: id
                }
            });
            if (!psicologoSalvo) {
                return res.status(404).send("Id não encontrado!")
            } else {
                return res.status(200).json(psicologoSalvo);
            }

        } catch (error) {
            console.error(error);
            return res.status(400).send("Ocorreu um erro!");
        };
    },

    atualizarPsicologo: async (req, res) => {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentacao } = req.body;

            const psicologoAtualizado = await Psicologos.update({
                nome,
                email,
                senha,
                apresentacao,
            },
                {
                    where: {
                        idPsicologo: id
                    }
                });

            const exibirPsicologo = await Psicologos.findByPk(id)

            if (!exibirPsicologo) {
                return res.status(400).send("Erro na requisição!")
            } else {
                res.status(200).json(exibirPsicologo)

            }

        } catch (error) {
            console.error(error);
            res.status(400).json("Ocorreu um erro!")
        }
    },

    deletarPsicologo: async (req, res) => {

        try {
            const { id } = req.params;

            const destroyPsicologo = await Psicologos.findByPk(id)

            if (!destroyPsicologo) {
                return res.status(404).send("Id não encontrado.");
            };

            const deletarPsicologo = await Psicologos.destroy({
                where: {
                    idPsicologo: id,
                }
            })
            return res.status(204).json(`Psicologo ${deletarPsicologo} deletado.`)
        } catch (error) {
            console.error(error);
            return res.status(404).json("Ocorreu um erro.")
        }
    }
} 

module.exports = psicologosController;