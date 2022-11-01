import request from 'supertest';

import app from '../../src/app';

describe('User routes', () => {
  test('Get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.body).toEqual([
      {
        id: 1,
        firstname: 'James',
        lastname: 'Conwell',
        othername: 'Smith',
        email: 'smith@gmail.com',
        phoneNumber: '237699999',
        passportUrl: 'http://passport.com/james',
        isAdmin: false,
      },
      {
        id: 2,
        firstname: 'Peter',
        lastname: 'Conwell',
        othername: 'Smith',
        email: 'smith@gmail.com',
        phoneNumber: '237699999',
        passportUrl: 'http://passport.com/james',
        isAdmin: false,
      },
      {
        id: 3,
        firstname: 'Alfred',
        lastname: 'Conwell',
        othername: 'Smith',
        email: 'smith@gmail.com',
        phoneNumber: '237699999',
        passportUrl: 'http://passport.com/james',
        isAdmin: false,
      },
      {
        id: 4,
        firstname: 'Williams',
        lastname: 'Conwell',
        othername: 'Smith',
        email: 'smith@gmail.com',
        phoneNumber: '237699999',
        passportUrl: 'http://passport.com/james',
        isAdmin: false,
      },
    ]);
  });

  test('get a specific user', async () => {
    const res = await request(app).get('/api/users/1');
    expect(res.body.data).toEqual([
      {
        id: 2,
        firstname: 'Peter',
        lastname: 'Conwell',
        othername: 'Smith',
        email: 'smith@gmail.com',
        phoneNumber: '237699999',
        passportUrl: 'http://passport.com/james',
        isAdmin: false,
      },
    ]);
  });
});
