const Palestra = require('../models/Palestra')
const moment = require('moment')

module.exports = {
    async store(req, res) {
        const { titulo, horario, palestrante }  = req.body
        
        const palestra = await Palestra.create({palestrante, titulo, horario })

        let message
        if(palestra) {
            message = {
                status: 'criada'
            }
        }

        return res.render('palestra/criarPalestra', { message })
    },
    async index(req, res) {
       
        const palestras = await Palestra.findAll()

        const {id} = req.params

        return res.render('palestra/selecionaPalestra', {palestras, id})
        
    },
    async list(req, res) {
        const palestras = await Palestra.findAll()

        return res.render('palestra/mostraPalestra', {palestras})
    }
}
