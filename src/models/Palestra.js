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
}

module.exports = Palestra