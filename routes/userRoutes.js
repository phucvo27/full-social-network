const userRouter = require('express').Router();
const userControllers = require('../controllers/userControllers');
const { protectRoute } = require('../utils/protectRoute');


userRouter.use(protectRoute);

userRouter.get('/request/:friendID', userControllers.friendRequest);
userRouter
    .route('/me')
    .get(userControllers.getCurrentUser);

userRouter
    .route('/:id')
    .get(userControllers.getUserInfor)

module.exports = { userRouter }