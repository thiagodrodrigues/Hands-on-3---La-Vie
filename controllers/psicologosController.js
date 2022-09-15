const Psicologos = require("../models/psicologos");

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
    }


}

module.exports = psicologosController;