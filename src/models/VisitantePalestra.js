const { Model, DataTypes } = require('sequelize')
const Visitante = require('./Visitante')
const Palestra = require('./Palestra')

class VisitantePalestra extends Model {
    static init(sequelize) {
        super.init({
            presente: DataTypes.BOOLEAN,
            id_palestra: {
                    type: DataTypes.INTEGER,
                    references: {
                      model: Palestra, 
                      key: 'id'
                    }
            },
            id_visitante: {
                type: DataTypes.INTEGER,
                references: {
                  model: Visitante, 
                  key: 'id'
                }
        }
        }, {
            sequelize
        })
    }
    static associate(models) {
        this.belongsToMany(models.Palestrante, { through: 'VisitantePalestra' })
        this.belongsToMany(models.Visitante, { through: 'VisitantePalestra' })
    }
}

module.exports = VisitantePalestra