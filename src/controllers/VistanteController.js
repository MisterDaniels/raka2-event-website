const Visitante = require('../models/Visitante')
const Palestra = require('../models/Palestra')
const Sequelize = require('sequelize')

const Op = Sequelize.Op;

module.exports = {
    async store(req, res) {
        const { cpf, nome, cidade, estado, sexo, data_nascimento } = req.body

        let containsId = await Visitante.findOne({
            where: {
                cpf
            }
        })

        if(containsId != undefined){
            if(containsId.dataValues.cpf == cpf){
                return res.render('cadastro/create', {erro: 'Este CPF já foi cadastrado!'})
            }
        }
        const visitante = await Visitante.create({cpf, nome, cidade, estado, sexo, data_nascimento})

        return res.redirect(`/selecionaPalestra/${visitante.id}`);
    },
    async change(req, res) {

        const  { id } = req.params
        const pal = req.body

        const palestras = await Object.values(pal)

        const todasAsPalestras = await palestras.map(function(e) {
            return parseInt(e)
        })

        console.log(todasAsPalestras)
        
        const visitante = await Visitante.findByPk(id)

        const p = await Palestra.findAll({
            where: {
                id: {
                    [Op.or]: todasAsPalestras
                }
            }
        })

        console.log(p)

            await visitante.addPalestras(p)

        return res.render(`entrar/entrar`, {message: "Cadastrado com sucesso! Bom evento!"})

    },

    async index(req, res) {
        const { cpf } = req.body
        const { palestra } = req.query;

        let visitante = await Visitante.findOne({
            where: {
                cpf
            }
        })

        if(!visitante){
            return res.render('entrar/entrar', {erro: 'Este CPF ainda não foi cadastrado!'})
        }

        if (palestra) {
            let visitantePalestra = await Visitante.findByPk(visitante.dataValues.id, {
                include: [{   
                    association: 'palestras', 
                    through:{ attributes: []},
                    where: {
                        id: palestra
                    }
                }]
            });

            if(!visitantePalestra){
                return res.render('entrar/entrar', {erro: 'Desulpe, mas parece que você não se cadastrou pra essa palestra!'});
            }
        }

        // TODO Confirmar o visitante na palestra se for QrCode
        // visitantePalestra.dataValues.presente = true;

        if (palestra) {
            return res.redirect(`/certificado?usuario=${visitante.dataValues.id}&certificado-novo=true`);
        } else {
            return res.redirect(`/certificado?usuario=${visitante.dataValues.id}`);
        }
    }
}