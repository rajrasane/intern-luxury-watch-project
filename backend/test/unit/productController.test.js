const mongoose = require('mongoose');
const Product = require('../../src/models/Product');
const controller = require('../../src/controllers/productController');

function resMock() {
    return {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };
}

const next = jest.fn();

jest.mock('../../src/models/Product', () => ({
    create: jest.fn(),
    findOne: jest.fn(),
    findOneAndUpdate: jest.fn(),
    findByIdAndUpdate: jest.fn(),
}));

describe('Product Controller (Simple)', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('create 400 if fields missing', async () => {
        const req = { body: { name: 'Test' } };
        const res = resMock();

        await controller.create(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
    });

    test('create 201 if success', async () => {
        const req = {
            body: { name: 'Ahbhvvg', slug: 'abhbh', sku: '1', category: 'cchggg', price: 100, images: [] }
        };
        const res = resMock();

        Product.create.mockResolvedValue(req.body);

        await controller.create(req, res, next);

        expect(res.status).toHaveBeenCalledWith(201);
    });

    test('create -> calls next() on error', async () => {
        const req = {
            body: { name: 'A', slug: 'a', sku: '1', category: 'c', price: 100, images: [] }
        };
        const res = resMock();

        Product.create.mockRejectedValue(new Error('DB error'));

        await controller.create(req, res, next);

        expect(next).toHaveBeenCalled();
    });

    test('getOne -> 400 for invalid id', async () => {
        const req = { params: { id: '123' } };
        const res = resMock();

        await controller.getOne(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
    });

    test('getOne -> 404 if not found', async () => {
        const id = new mongoose.Types.ObjectId().toString();
        const req = { params: { id } };
        const res = resMock();

        Product.findOne.mockReturnValue({ lean: () => null });

        await controller.getOne(req, res, next);

        expect(res.status).toHaveBeenCalledWith(404);
    });

    test('getOne -> returns product', async () => {
        const id = new mongoose.Types.ObjectId().toString();
        const req = { params: { id } };
        const res = resMock();

        Product.findOne.mockReturnValue({ lean: () => ({ name: 'Test' }) });

        await controller.getOne(req, res, next);

        expect(res.json).toHaveBeenCalledWith({ data: { name: 'Test' } });
    });

    test('update -> 400 for bad id', async () => {
        const req = { params: { id: 'bad' }, body: {} };
        const res = resMock();

        await controller.update(req, res, next);

        expect(res.status).toHaveBeenCalledWith(400);
    });

    test('update -> 404 if not found', async () => {
        const id = new mongoose.Types.ObjectId().toString();
        const req = { params: { id }, body: {} };
        const res = resMock();

        Product.findOneAndUpdate.mockResolvedValue(null);

        await controller.update(req, res, next);

        expect(res.status).toHaveBeenCalledWith(404);
    });

    test('update -> success', async () => {
        const id = new mongoose.Types.ObjectId().toString();
        const req = { params: { id }, body: { name: 'New' } };
        const res = resMock();

        Product.findOneAndUpdate.mockResolvedValue({ name: 'New' });

        await controller.update(req, res, next);

        expect(res.json).toHaveBeenCalledWith({ data: { name: 'New' } });
    });

    test('remove -> 404 if not found', async () => {
        const id = new mongoose.Types.ObjectId().toString();
        const req = { params: { id } };
        const res = resMock();

        Product.findByIdAndUpdate.mockResolvedValue(null);

        await controller.remove(req, res, next);

        expect(res.status).toHaveBeenCalledWith(404);
    });

    test('remove -> soft delete', async () => {
        const id = new mongoose.Types.ObjectId().toString();
        const req = { params: { id } };
        const res = resMock();

        Product.findByIdAndUpdate.mockResolvedValue({});

        await controller.remove(req, res, next);

        expect(res.json).toHaveBeenCalledWith({ message: 'Soft deleted' });
    });
});


