const Palestra = require('../models/Palestra')
const moment = require('moment')

module.exports = {
    async store(req, res) {
        const { titulo, horario, palestrante }  = req.body
        
        const palestra = await Palestra.create({palestrante, titulo, horario })

        return res.json(palestra)
    },
    async index(req, res) {
       
        const palestras = await Palestra.findAll()
        return res.render('palestra/selecionaPalestra', {palestras})
        
    }
}
