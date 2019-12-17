const messageRouter = require('express').Router();
const messageControllers = require('../controllers/messageControllers.js');
const { protectRoute } = require('../utils/protectRoute');

messageRouter.use(protectRoute)
messageRouter
    .route('/:friendID')
    .get(messageControllers.getAllMessage)
    .post(messageControllers.createMessage)

module.exports = { messageRouter }