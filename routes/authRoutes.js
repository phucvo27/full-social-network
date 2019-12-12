const authRouter = require('express').Router();
const authControllers = require('../controllers/authControllers')

authRouter.post('/login', authControllers.loginHandler);
authRouter.post('/signup', authControllers.signUpHandler);
module.exports = { authRouter };