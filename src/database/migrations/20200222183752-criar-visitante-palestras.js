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
        id_visitante: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Visitantes', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        id_palestra: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: { model: 'Palestras', key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      })

  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.dropTable('VisitantePalestras');

  }
};
