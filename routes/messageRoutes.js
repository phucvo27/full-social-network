const messageRouter = require('express').Router();
const messageControllers = require('../controllers/messageControllers.js');


messageRouter
    .route('/')
    .get(messageControllers.getAllMessage)
    .post(messageControllers.createMessage)

module.exports = { messageRouter }