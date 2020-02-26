const ValidaQrCode = require("../../services/validacoes/validaCodigoQrCode"); 
const Visitante = require('../../models/Visitante');
const VisitantePalestra = require('../../models/VisitantePalestra');

module.exports = {
    async get(req, res) {
        const palestra = req.params.palestra;
        const codigoAutenticacao = req.params.codigoAutenticacao;

        var validacaoCodigo = ValidaQrCode.validaCodigo(palestra, 
            codigoAutenticacao);

        if (validacaoCodigo === true) {
            return res.render('entrar/entrar', {
                palestra: palestra,
                token: codigoAutenticacao
            });
        } else {
            return res.render('404');
        }
    },
    async post(req, res) {
        const palestra = req.params.palestra;
        const cpf = req.params.cpf;

        let visitante;
        let visitantePalestra;

        try {
            visitante = await Visitante.findOne({
                where: {
                    cpf: cpf
                }
            });
        } catch(error) {
            return res.json({
                error: 'Ops, parece que houve um erro interno!'
            });
        }

        if (!visitante) {
            return res.json({
                error: 'Parece que você não está cadastrado!'
            });
        }

        try {
            visitantePalestra = await Visitante.findByPk(visitante.dataValues.id, {
                include: [{   
                    association: 'palestras', 
                    through:{ attributes: []},
                    where: {
                        id: palestra
                    }
                }]
            });
        } catch(error) {
            return res.json({
                error: 'Ops, parece que houve um erro interno!'
            });
        }

        if (!visitantePalestra) {
            return res.json({
                error: 'Parece que você não se cadastrou pra essa palestra!'
            });
        }

        // TODO Confirmar presença na palestra
        return res.json({
            success: 'true'
        });
    }
}