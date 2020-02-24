const { Model, DataTypes } = require('sequelize')

class Palestra extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            horario: DataTypes.DATE,
            palestrante: DataTypes.STRING
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Visitante, { foreignKey: 'id_palestra', through: 'VisitantePalestras', as: 'visitante'})
    }
}

module.exports = Palestra