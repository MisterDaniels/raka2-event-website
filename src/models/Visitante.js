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
    static associate(models) {
        this.belongsToMany(models.Palestra, { foreignKey: 'id_palestra', through: 'VisitantePalestras', as: 'palestras' })
    }
   
}

module.exports = Visitante