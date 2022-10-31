import request from 'supertest';
import app from '../../src/app';

describe('Office Route', () => {
  test('Get all Parties', async () => {
    const res = await request(app).get('/api/offices');
    expect(res.body.data).toEqual([
      {
        id: 1,
        type: 'Federal',
        name: 'President',
      },
      {
        id: 2,
        type: 'Federal',
        name: 'Vice President',
      },
      {
        id: 3,
        type: 'Legislative',
        name: 'President',
      },
      {
        id: 4,
        type: 'legislative',
        name: 'Vice President',
      },
      {
        id: 5,
        type: 'Federal',
        name: 'Secretary',
      },
    ]);
  });

  test('Get a specific Office', async () => {
    const res = await request(app).get('/api/offices/1');
    expect(res.body.data).toEqual({
      id: 2,
      type: 'Federal',
      name: 'Vice President',
    });
  });

  test('Add a new Office', async () => {
    const res = await request(app).post('/api/offices/create').send({
      id: 6,
      type: 'State',
      name: 'Treasurer',
    });
    expect(res.body.data).toEqual([
      {
        id: 1,
        type: 'Federal',
        name: 'President',
      },
      {
        id: 2,
        type: 'Federal',
        name: 'Vice President',
      },
      {
        id: 3,
        type: 'Legislative',
        name: 'President',
      },
      {
        id: 4,
        type: 'legislative',
        name: 'Vice President',
      },
      {
        id: 5,
        type: 'Federal',
        name: 'Secretary',
      },
      {
        id: 6,
        type: 'State',
        name: 'Treasurer',
      },
    ]);
  });

  test('Delete an Office', async () => {
    const res = await request(app).delete('/api/offices/1');
    expect(res.body.data.length).toBe(5);
  });

  test('Update', async () => {
    const res = await request(app).put('/api/offices/1').send({
      id: 1,
      type: 'Municipal',
      name: 'Chair Man',
    });
    expect(res.body.data[0]).toEqual({
      id: 1,
      type: 'Municipal',
      name: 'Chair Man',
    });
  });
});
