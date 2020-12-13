const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
    describe('POST /api/people', () => {
        test('Successfully creates a person', async () => {
            const res = await request(server).post('/api/people').send({name: 'Drax'});
            expect(res.status).toBe(201);
        })
    })
    describe('DELETE /api/people/:id', () => {
        test('Successfully deletes a person', async () => {
            const id = 4
            const res = await request(server).delete(`/api/people/${id}`);
            expect(res.status).toBe(200);
        })
    })
})