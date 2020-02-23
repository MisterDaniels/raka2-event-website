const ValidaQrCode = require("../../services/validacoes/validaCodigoQrCode"); 
const Visitante = require('../../models/Visitante');

const ERRORS = {
    usuarioNaoExiste: 1
};

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

        let containsId = await Visitante.findOne({
            where: {
                id: cpf
            }
        });

        if (!containsId) {
            return res.json({
                error: ERRORS['usuarioNaoExiste']
            });
        }

        // TODO Validar se está na palestra


        // TODO Confirmar presença na palestra
        return res.json({
            success: '1'
        });
    }
}