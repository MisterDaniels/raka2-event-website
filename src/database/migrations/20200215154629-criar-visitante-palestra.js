'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Visitante_palestra', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        id_palestra: {
          type: Sequelize.INTEGER,
          references: { model: 'Palestras', key: 'id'},
          allowNull: false
        },
        id_visitante: {
          type: Sequelize.STRING,
          references: { model: 'Visitantes', key: 'id'},
          allowNull: false
        },
        presente: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        }
      })
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('Visitante_palestra');
    
  }
};
