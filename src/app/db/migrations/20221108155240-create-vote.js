'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Votes', {
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
        allowNull: false,
        onDelete: 'CASCADE',
      },
      candidateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Candidates',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      createdBy: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('Votes');
  }
};