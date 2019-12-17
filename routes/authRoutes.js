const authRouter = require('express').Router();
const authControllers = require('../controllers/authControllers');

authRouter.get('/check-session', authControllers.checkSession);
authRouter.get('/logout', authControllers.logOutHandler);
authRouter.post('/login', authControllers.loginHandler);
authRouter.post('/signup', authControllers.signUpHandler);

module.exports = { authRouter };