const { UserController } = require('./user.controller');
const { EmailController } = require('./email.controller');
const services = require('../services');

const userController = new UserController(services.userService, services.jwtService);
const emailController = new EmailController(services.emailService);

module.exports = {
	userController,
	emailController,
};
