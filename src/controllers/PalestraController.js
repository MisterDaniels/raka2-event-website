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
    async list(req, res) {
        const palestras = await Palestra.findAll({
            attributes: [
                'id',
                'titulo',
                [sequelize.fn('to_char', sequelize.col('horario'), 'DD/MM/YYYY HH24:MI'), 'horario'],
                'palestrante'
            ]
        })
        
        return res.render('palestra/mostraPalestra', { palestras })
    }
}
