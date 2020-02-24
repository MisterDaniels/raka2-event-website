const { Model, DataTypes } = require('sequelize')

class Visitante extends Model {
    static init(sequelize) {
        super.init({
            cpf: DataTypes.STRING,
            nome: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            data_nascimento: DataTypes.DATE,
            sexo: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Palestra, { foreignKey: 'id_visitante', through: 'VisitantePalestras', as: 'palestras'})
    }
    
}

module.exports = Visitante