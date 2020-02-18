const ValidaQrCode = require("../../services/validacoes/validaCodigoQrCode"); 

exports.get = function (req, res) {
    const palestra = req.params.palestra;
    const codigoAutenticacao = req.params.codigoAutenticacao;

    var validacaoCodigo = ValidaQrCode.validaCodigo(palestra, 
        codigoAutenticacao);

    if (validacaoCodigo === true) {
        return res.render('entrar/entrar', {
            palestra: palestra
        });
    } else {
        return res.render('404');
    }
}