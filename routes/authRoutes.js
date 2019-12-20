const authRouter = require('express').Router();
const authControllers = require('../controllers/authControllers');
const { protectRoute } = require('../utils/protectRoute');
authRouter.get('/check-session', authControllers.checkSession);

authRouter.post('/login', authControllers.loginHandler);
authRouter.post('/signup', authControllers.signUpHandler);

authRouter.get('/logout', protectRoute ,authControllers.logOutHandler);
module.exports = { authRouter };