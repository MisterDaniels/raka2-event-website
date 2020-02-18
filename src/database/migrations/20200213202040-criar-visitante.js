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
      });

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Visitantes');
  }
};