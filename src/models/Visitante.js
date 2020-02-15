const { Model, DataTypes } = require('sequelize')

class Visitante extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type:DataTypes.STRING,
                primaryKey: true
            },
            nome: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            data_nascimento: DataTypes.STRING,
            sexo: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Visitante