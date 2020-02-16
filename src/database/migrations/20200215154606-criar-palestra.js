'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    // return queryInterface.createTable('palestras', 
    //   { 
    //     id: {
    //       type: Sequelize.INTEGER,
    //       primaryKey: true,
    //       autoIncrement: true,
    //       allowNull: false,
    //     },
    //     titulo: {
    //       type: Sequelize.STRING,
    //       allowNull: false
    //     },
    //     id_palestrante: {
    //       type: Sequelize.INTEGER,
    //       references: { model: 'palestrates', key: 'id'},
    //       onUpdate: 'CASCADE',
    //       onDelete: 'CASCADE',
    //     },
    //     horario: {
    //       type: Sequelize.DATE,
    //       allowNull: false,
    //     }

    //   });
  },

  down: (queryInterface, Sequelize) => {
    
    //   return queryInterface.dropTable('palestras');
    
  }
};
