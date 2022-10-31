import request from 'supertest';
import app from '../../src/app';

describe('Party Routes', () => {
  test('Get all Parties', async () => {
    const res = await request(app).get('/api/parties');
    expect(res.body).toEqual([
      {
        id: 1,
        name: 'CPDM',
        hdAddress: 'Yaounde4',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 2,
        name: 'SDF',
        hdAddress: 'Yaounde5',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 3,
        name: 'YPP',
        hdAddress: 'Yaounde',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
    ]);
  });

  test('number of initial parties should be 3', async () => {
    const res = await request(app).get('/api/parties');
    expect(res.body.length).toBe(3);
  });

  test('Get a specific party', async () => {
    const res = await request(app).get('/api/parties/1');
    expect(res.body).toEqual({
      id: 2,
      name: 'SDF',
      hdAddress: 'Yaounde5',
      logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
      description: 'I love my country',
    });
  });

  test('Add a new party', async () => {
    const res = await request(app).post('/api/parties/create').send({
      id: 4,
      name: 'WCD',
      hdAddress: 'Bamenda street 5',
      logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
      description: 'Bamenda my love',
    });
    expect(res.body.data).toEqual([
      {
        id: 1,
        name: 'CPDM',
        hdAddress: 'Yaounde4',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 2,
        name: 'SDF',
        hdAddress: 'Yaounde5',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 3,
        name: 'YPP',
        hdAddress: 'Yaounde',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 4,
        name: 'WCD',
        hdAddress: 'Bamenda street 5',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'Bamenda my love',
      },
    ]);
  });

  test('Delete Party', async () => {
    const res = await request(app).delete('/api/parties/1');
    expect(res.body.data).toEqual([
      {
        id: 2,
        name: 'SDF',
        hdAddress: 'Yaounde5',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 3,
        name: 'YPP',
        hdAddress: 'Yaounde',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 4,
        name: 'WCD',
        hdAddress: 'Bamenda street 5',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'Bamenda my love',
      },
    ]);
  });

  test('Update Party', async () => {
    const res = await request(app).put('/api/parties/2').send({
      id: 2,
      name: 'HEN',
      hdAddress: 'kumba',
      logoUrl: 'https://unsplash.com/photos/mxIGWk111u0hen',
      description: 'my G',
    });
    expect(res.body.data).toEqual([
      {
        id: 1,
        name: 'CPDM',
        hdAddress: 'Yaounde4',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 2,
        name: 'HEN',
        hdAddress: 'kumba',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0hen',
        description: 'my G',
      },
      {
        id: 3,
        name: 'YPP',
        hdAddress: 'Yaounde',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'I love my country',
      },
      {
        id: 4,
        name: 'WCD',
        hdAddress: 'Bamenda street 5',
        logoUrl: 'https://unsplash.com/photos/mxIGWk111u0',
        description: 'Bamenda my love',
      },
    ]);
  });
});
