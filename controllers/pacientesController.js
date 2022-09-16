const Pacientes = require("../models/pacientes");

const pacientesController = {
    listarPacientes: async (req,res) =>{
        try {
        let array = {};
        const listaDePacientes = await Pacientes.findAll({
        });

        if(listaDePacientes.length==0){
            return res.status(400).json(array);
        }
        res.status(200).json(listaDePacientes);

        } catch (error) {
            console.error(error);
            res.status(400).send("Houve um erro.")
        }
    },

    async cadastrarPaciente(req,res){
        try {
            const {nome, idade, email} = req.body;

            const verificaEmail = await Pacientes.count({
                where:{
                    email
                }
            });
                if (verificaEmail){
                    return res.status(400).send("E-mail já existente.")
                }
            const newPaciente = await Pacientes.create({
                nome,
                idade,
                email,
            });
            return res.status(201).json(newPaciente);
        } catch (error) {
            console.error(error);
            res.status(404).send("Ocorreu um erro.");
        };
    },

    async listarPacienteID(req,res){
        try {
            const { id } = req.params;
            const pacienteSalvo = await Pacientes.findOne({
                where:{
                    idPaciente : id
                }
            });

            if(!pacienteSalvo){
                return res.status(404).send("ID do paciente não foi encontrado.")
            } else {
                return res.status(200).json(pacienteSalvo);}
        } catch (error) {
            console.error(error);
            return res.status(400).send("Ocorreu um erro.");
        };
    },

    async deletarPaciente(req,res){
      try {
          const { id } = req.params;

    const destroyPaciente = await Pacientes.findByPk(id)

    if (!destroyPaciente){
        return res.status(404).send("Id não encontrado.");
    };

    const deletarPaciente = await Pacientes.destroy({
        where:{
             idPaciente: id,
        }
    })
        return res.status(201).json(`Paciente ${deletarPaciente} deletado.`)
         } catch (error) {
      console.error(error);
      return res.status(404).json("Ocorreu um erro.")
          }
      },

    async atualizarPaciente(req,res){
      try {
          const { id } = req.params;
          const {nome, idade, email} = req.body;

          const pacienteAtualizado = await Pacientes.update({
              nome,
              idade,
              email,
      },{
          where:{
              idPaciente : id
          }
      });

      const exibirPaciente = await Pacientes.findByPk(id)

          if (!exibirPaciente){
              return res.status(400).send("Id não encontrado.");
          } else{res.status(200).json(exibirPaciente)

          }

      } catch (error) {
        console.error(error);
        res.status(400).json("Ocorreu um erro.")
      }
    }

};

module.exports = pacientesController;
