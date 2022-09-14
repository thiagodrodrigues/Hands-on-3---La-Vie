const Psicologo = require('../models/psicologos');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const secret = require("../configs/secret")

const authController = {

    async login(req, res) {

            const { email, senha } = req.body;
            const psicologoLogin = await Psicologo.findOne({
                
                where: {
                    email
                }
            });

            if (!psicologoLogin || !bcrypt.compareSync(senha, psicologoLogin.senha)){
                return res.status(401).json("E-mail ou senha inválido, tente novamente!");
            }

            const token = jwt.sign({
                id: psicologoLogin.id,
                nome: psicologoLogin.nome,
                email: psicologoLogin.email,
            }, secret.key);

            return res.status(200).json(token);
    
    },
};

module.exports = authController;