const request = require('supertest');
const app = require('../../src/app');

describe('Auth Routes', () => {

    describe('POST /api/auth/register', () => {

        test('return 400 when username is missing', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({ email: 'test@example.com', password: 'password123' });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'username, email and password are required');
        });

        test('return 400 when email is missing', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({ username: 'testuser', password: 'password123' });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'username, email and password are required');
        });

        test('return 400 when password is missing', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({ username: 'testuser', email: 'test@example.com' });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'username, email and password are required');
        });

    });

    describe('POST /api/auth/login', () => {

        test('return 400 when email is missing', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({ password: 'password123' });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'please enter email and password');
        });

        test('return 400 when password is missing', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({ email: 'test@example.com' });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'please enter email and password');
        });

    });

    describe('POST /api/auth/refresh', () => {

        test('return 401 when no refresh token cookie', async () => {
            const response = await request(app)
                .post('/api/auth/refresh');

            expect(response.statusCode).toBe(401);
        });

    });

    describe('POST /api/auth/logout', () => {

        test('return 200 and logout message', async () => {
            const response = await request(app)
                .post('/api/auth/logout');

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Logged out');
        });

    });

    describe('GET /api/auth/profile', () => {

        test('return 401 without authentication', async () => {
            const response = await request(app)
                .get('/api/auth/profile');

            expect(response.statusCode).toBe(401);
        });

    });

    describe('GET /api/auth/admin', () => {

        test('return 401 without authentication', async () => {
            const response = await request(app)
                .get('/api/auth/admin');

            expect(response.statusCode).toBe(401);
        });

    });

    describe('DELETE /api/auth/delete', () => {

        test('return 401 without authentication', async () => {
            const response = await request(app)
                .delete('/api/auth/delete');

            expect(response.statusCode).toBe(401);
        });

    });

});
