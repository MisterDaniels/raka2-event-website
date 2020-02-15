'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.createTable('visitante_palestra', 
    //   { 
    //     id: {
    //       type: Sequelize.INTEGER,
    //       primaryKey: true,
    //       autoIncrement: true,
    //       allowNull: false,
    //     },
    //     id_palestrante: {
    //       type: Sequelize.INTEGER,
    //       references: { model: 'palestrates', key: 'id'},
    //       onUpdate: 'CASCADE',
    //       onDelete: 'CASCADE',
    //     },
    //     id_visitante: {
    //       type: Sequelize.INTEGER,
    //       references: { model: 'visitantes', key: 'id'},
    //       onUpdate: 'CASCADE',
    //       onDelete: 'CASCADE',
    //     },
    //     presente: {
    //       type: Sequelize.BOOLEAN,
    //       defaultValue: false,
    //     }
    //   })
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
