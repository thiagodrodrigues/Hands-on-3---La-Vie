const psicologo = require("../models");
const bcrypt = require("bcryptjs");
const loginPsicologoController = {
    login: async(req, res) => {
        const { email, senha } = req.body;

        try {
            const senhaHash = bcrypt.hashSync(senha, 10);
            const newUser = await psicologo.create({
                email,
                senha: senhaHash,
            });
    
            return res.status(201).json(newUser);
    
            
        } catch (error) {
            console.log(error);
        }
        
    }
};

module.exports = loginPsicologoController;