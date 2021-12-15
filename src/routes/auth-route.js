const express = require('express');
const {registerUser, loginUser, recoverPassword, keepLoggedIn} = require('../controllers/auth-controller');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.post('/api/auth/register', registerUser);
router.post('/api/auth/login', loginUser);
router.post('/api/auth/forgot_password', recoverPassword);
router.get('/api/auth/auth', authMiddleware, keepLoggedIn);

module.exports = router;
