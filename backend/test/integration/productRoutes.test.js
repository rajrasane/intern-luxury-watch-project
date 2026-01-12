const request = require('supertest');
const app = require('../../src/app');

describe('Product Routes', () => {

    describe('get /api/products/:id', () => {

        test('return 400 for invalid product id format', async () => {
            const response = await request(app)
                .get('/api/products/invalid-id')
                .expect(400);

            expect(response.body).toHaveProperty('message', 'Invalid id');
        });

    });

    describe('post /api/products', () => {
        test('return 401 without authentication', async () => {
            const newProduct = {
                name: 'Test Watch',
                slug: 'test-watch',
                sku: 'TW001',
                category: 'watches',
                price: 999,
                images: [{ url: 'http://example.com/watch.jpg' }]
            };

            const response = await request(app)
                .post('/api/products')
                .send(newProduct);

            expect(response.statusCode).toBe(401);
        });

    });

    describe('patch /api/products/:id', () => {

        test('return 401 without authentication', async () => {
            const fakeId = '507f1f77bcf86cd799439011';
            const response = await request(app)
                .patch(`/api/products/${fakeId}`)
                .send({ name: 'Updated Name' });

            expect(response.statusCode).toBe(401);
        });

        test('return 401 for invalid id without auth (auth checked first)', async () => {
            const response = await request(app)
                .patch('/api/products/invalid-id')
                .send({ name: 'Updated Name' });

            // Auth middleware runs before ID validation
            expect(response.statusCode).toBe(401);
        });

    });

    describe('delete /api/products/:id', () => {

        test('return 401 without authentication', async () => {
            const fakeId = '507f1f77bcf86cd799439011';
            const response = await request(app)
                .delete(`/api/products/${fakeId}`);

            expect(response.statusCode).toBe(401);
        });

    });

    describe('non-existent routes', () => {

        test('return 404 for non-existent route', async () => {
            const response = await request(app)
                .get('/api/nonexistent')
                .expect(404);

            expect(response.body).toHaveProperty('message', 'Not Found');
        });

    });

});
