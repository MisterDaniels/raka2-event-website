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

        let containsId = await Visitante.findOne({
            where: {
                cpf
            }
        })

        if(containsId == undefined){
            return res.render('entrar/entrar', {erro: 'Este CPF ainda não foi cadastrado!'})
        }

        // TODO confirmar presença se for QrCode


        if (palestra) {
            return res.redirect('/certificado?certificado-novo=true');
        } else {
            return res.redirect('/certificado');
        }
    }
}