'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
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
      partyId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Parties',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        primaryKey: true,
        allowNull: false,
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidates');
  },
};
