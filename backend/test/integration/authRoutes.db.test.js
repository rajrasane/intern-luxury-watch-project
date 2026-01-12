require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const User = require('../../src/models/User');

// Test user data
const testUser = {
    username: 'testuser_' + Date.now(),
    email: `testuser_${Date.now()}@example.com`,
    password: 'password123'
};

let accessToken = '';

// Connect to MongoDB before all tests
beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI);
});

// Clean up test user after all tests
afterAll(async () => {
    await User.deleteOne({ email: testUser.email });
    await mongoose.connection.close();
});

describe('Auth Routes (with DB)', () => {

    describe('POST /api/auth/register', () => {

        test('register a new user successfully', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send(testUser);

            expect(response.statusCode).toBe(201);
            expect(response.body).toHaveProperty('user');
            expect(response.body).toHaveProperty('accessToken');
            expect(response.body).toHaveProperty('message', 'User registered');
            expect(response.body.user.email).toBe(testUser.email);
            expect(response.body.user.username).toBe(testUser.username);
            expect(response.body.user).not.toHaveProperty('password');
        });

        test('return 400 when registering with existing email', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send(testUser);

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message');
        });

        test('return 400 when password is less than 6 characters', async () => {
            const response = await request(app)
                .post('/api/auth/register')
                .send({
                    username: 'shortpassuser',
                    email: 'shortpass@example.com',
                    password: '12345'
                });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'Password must be at least 6 characters');
        });

    });

    describe('POST /api/auth/login', () => {

        test('login with valid credentials', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: testUser.email,
                    password: testUser.password
                });

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('user');
            expect(response.body).toHaveProperty('accessToken');
            expect(response.body.user.email).toBe(testUser.email);

            // Save token for later tests
            accessToken = response.body.accessToken;
        });

        test('return 400 for invalid email', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: 'nonexistent@example.com',
                    password: 'password123'
                });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'Invalid credentials');
        });

        test('return 400 for invalid password', async () => {
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: testUser.email,
                    password: 'wrongpassword'
                });

            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('message', 'Invalid credentials');
        });

    });

    describe('GET /api/auth/profile', () => {

        test('get profile with valid token', async () => {
            const response = await request(app)
                .get('/api/auth/profile')
                .set('Authorization', `Bearer ${accessToken}`);

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('email', testUser.email);
            expect(response.body).not.toHaveProperty('password');
        });

        test('return 401 with invalid token', async () => {
            const response = await request(app)
                .get('/api/auth/profile')
                .set('Authorization', 'Bearer invalidtoken');

            expect(response.statusCode).toBe(403);
        });

    });

    describe('POST /api/auth/logout', () => {

        test('logout successfully', async () => {
            const response = await request(app)
                .post('/api/auth/logout');

            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('message', 'Logged out');
        });

    });

});
