const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');
const auth = require('../middleware/auth');
const authorize = require('../middleware/authorize');

// Public routes (no auth required)
router.get('/', ctrl.list);
router.get('/:id', ctrl.getOne);

// Admin-only routes (auth + admin role required)
router.post('/', auth, authorize(['admin']), ctrl.create);
router.patch('/:id', auth, authorize(['admin']), ctrl.update);
router.delete('/:id', auth, authorize(['admin']), ctrl.remove); // soft delete

module.exports = router;
