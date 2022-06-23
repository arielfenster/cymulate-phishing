const express = require('express');
const userRouter = require('./user.route');
const emailRouter = require('./email.route');

const baseRouter = express.Router();

baseRouter.use('/user', userRouter);
baseRouter.use('/email', emailRouter);

module.exports = { baseRouter };
