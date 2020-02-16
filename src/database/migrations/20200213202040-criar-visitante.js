'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Visitantes',
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true,
          autoIncrement: false,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        cidade: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        estado: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        data_nascimento: {
          type: Sequelize.DATE,
          allowNull: false
        },
        sexo: {
          type: Sequelize.STRING,
          allowNull: false
        }
      },{
        // disable the modification of table names; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true,
      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('visitantes');
  }
};
