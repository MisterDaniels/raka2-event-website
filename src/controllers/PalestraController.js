const Palestra = require('../models/Palestra')

module.exports = {
    async store(req, res) {
        const { titulo, horario, palestrante }  = req.body
    
        const palestra = await Palestra.create({palestrante, titulo, horario })

        return res.json(palestra)
    }
}