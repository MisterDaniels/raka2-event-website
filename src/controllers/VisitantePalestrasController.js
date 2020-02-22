const Palestra = require('../models/Palestra')
const Visitante = require('../models/Visitante')

module.exports = {
    async store(req, res) {
        const { cpf } = req.body

        console.log(cpf)
        if(!cpf) {
            return res.render('entrar/entrar', {message: 'Erro'})
        }
        const visitante = await Visitante.findByPk(cpf, {
            include: { association: 'id_palestra'} })

        return res.json(visitante)
    },
    async index(req, res) {
                
    }
}