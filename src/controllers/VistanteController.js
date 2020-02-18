const Visitante = require('../models/Visitante')

module.exports = {
    async store(req, res) {
        const { id, nome, cidade, estado, sexo, data_nascimento } = req.body

        let containsId = await Visitante.findOne({
            where: {
                id: id
            }
        })

        if(containsId != undefined){
            if(containsId.dataValues.id == id){
                return res.json({erro: 'Este CPF já foi cadastrado'})
            }
        }
        const visitante = await Visitante.create({id, nome, cidade, estado, sexo, data_nascimento})

        return res.json(visitante)
    }
}