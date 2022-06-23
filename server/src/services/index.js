const { UserService } = require('./user.service');
const { EmailService } = require('./email.service');
const { JwtService } = require('./jwt.service');
const models = require('../models');

const userService = new UserService(models.userModel);
const emailService = new EmailService(models.emailModel, models.userModel);
const jwtService = new JwtService();

module.exports = {
	userService,
	emailService,
	jwtService,
};
