const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/productController');

router.post('/', ctrl.create);
router.get('/', ctrl.list);
router.get('/:id', ctrl.getOne);
router.patch('/:id', ctrl.update);
router.delete('/:id', ctrl.remove); // soft delete

module.exports = router;
