const userRouter = require('express').Router();
const userControllers = require('../controllers/userControllers');

userRouter.get('/request/:friendID', userControllers.friendRequest);