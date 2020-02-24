const VisitantePalestra = require('../../models/VisitantePalestra');

const Op = Sequelize.Op;

module.exports = {
    async get(req, res) {
        const userId = req.query.usuario;
        
        const allPalestras = await VisitantePalestra.findAll({
            where: {
                id_visitante: userId,
                presente: true
            }
        });

        return res.render('certificado/lista');
    }
};