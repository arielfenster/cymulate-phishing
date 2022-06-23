const express = require('express');
const { emailController } = require('../controllers');
const { jwtMiddleware } = require('../middlewares/jwt.middleware');

const router = express.Router();

router.get('/', jwtMiddleware, emailController.getEmails);
router.post('/', jwtMiddleware, emailController.sendEmail);
router.patch('/:id', emailController.notifyEmailRead);

module.exports = router;
