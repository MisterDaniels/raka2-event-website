const VisitantePalestra = require('../../models/VisitantePalestra');

module.exports = {
    async get(req, res) {
        const userId = req.query.usuario;
        
        // let visitantePalestra = await Visitante.findByPk(userId, {
        //     include: [{   
        //         association: 'palestras', 
        //         through:{ attributes: []},
        //         where: {
        //             presente: true
        //         }
        //     }]
        // });

        return res.render('certificado/lista');
    }
};