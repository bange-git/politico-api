import request from 'supertest';

import app from '../../src/app';

describe('User routes', () => {
  test('Get all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.body).toEqual([
      { name: 'james', age: 37 },
      { name: 'susan', age: 87 },
      { name: 'alfred', age: 56 },
    ]);
  });
});
