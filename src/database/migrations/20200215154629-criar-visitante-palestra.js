'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('VisitantePalestras', 
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
          type: Sequelize.INTEGER,
          references: { model: 'Visitantes', key: 'id'},
          allowNull: false
        },
      })
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('VisitantePalestras');
    
  }
};
