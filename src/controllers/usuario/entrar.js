const Visitante = require('../../models/Visitante');

const ERRORS = {
    usuarioNaoExiste: 1
};

exports.post = async function (req, res) {
    const keys = Object.keys(req.body)

    let containsId = await Visitante.findOne({
        where: {
            id: req.body['cpf']
        }
    });

    if (!containsId) {
        return res.render('entrar/entrar', {
            error: ERRORS['usuarioNaoExiste']
        });
    }

    if (req.query.palestra !== '') {
        res.redirect(`/certificado?usuario=${req.body['cpf']}&palestra=${req.query.palestra}`);
    } else {    
        res.redirect(`/certificado?usuario=${req.body['cpf']}`);
    }
}