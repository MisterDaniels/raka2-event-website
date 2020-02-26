const Palestra = require('../../models/Palestra');
const Visitante = require('../../models/Visitante');

module.exports = {
    async get(req, res) {
        const userId = req.query.usuario;
        
        let visitante = await Visitante.findByPk(userId);

        let palestras = await Palestra.findAll();

        return res.render('certificado/lista', {palestras, visitante});
    }
};