'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Petitions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      officeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Offices',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
      },
      body: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Petitions');
  }
};