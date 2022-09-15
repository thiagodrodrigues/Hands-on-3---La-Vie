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

                    return res.status(201).send(newUser);
                });
            });
        } catch (error) {

        }
    }

}

module.exports = psicologosController;