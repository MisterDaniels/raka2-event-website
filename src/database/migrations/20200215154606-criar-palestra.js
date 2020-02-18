'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.createTable('Palestras', 
      { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        titulo: {
          type: Sequelize.STRING,
          allowNull: false
        },
        palestrante: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        horario: {
          type: Sequelize.DATE,
          allowNull: false,
        }

      });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('Palestras');
    
  }
};
