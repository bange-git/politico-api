'use strict';

const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        firstname: 'John',
        lastname: 'Doe',
        othername: 'Swana',
        email: 'example@example.com',
        password: bcrypt.hashSync('password1', 10),
        phoneNumber: '237699997',
        passportUrl: 'http://seb.com',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Jude',
        lastname: 'Everest',
        othername: 'milla',
        email: 'example2@example.com',
        password: bcrypt.hashSync('password1', 10),
        phoneNumber: '237699997',
        passportUrl: 'http://seb.com',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstname: 'Mary',
        lastname: 'Silver',
        othername: 'norman',
        email: 'example3@example.com',
        password: bcrypt.hashSync('password1', 10),
        phoneNumber: '237699997',
        passportUrl: 'http://seb.com',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
