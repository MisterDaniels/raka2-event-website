const VisitantePalestra = require('../models/VisitantePalestra')

module.exports = {
    async store(req, res) {
        const { id_palestra, id_visitante}  = req.body

        console.log(id_palestra, id_visitante)
    
        const palestra = await VisitantePalestra.create({id_palestra, id_visitante})

        return res.json(palestra)
    }
}