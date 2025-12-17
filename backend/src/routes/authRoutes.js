const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/authController');

console.log("In auth routes");

router.get('/login',ctrl.login);
router.post('/register',ctrl.register);
router.delete('/delete/:id',ctrl.deleteUser);

module.exports = router;