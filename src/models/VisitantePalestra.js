const { Model, DataTypes } = require('sequelize')

class VisitantePalestra extends Model {
    static init(sequelize) {
        super.init({
            presente: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsTo(models.Palestrante, { foreignKey: 'id_palestra', as: 'palestrante' })
        this.belongsTo(models.Visitante, { foreignKey: 'id_visitante', as: 'visitante' })
    }
}

module.exports = VisitantePalestra