const likeRouter = require('express').Router({ mergeParams: true });
const likeController = require('../controllers/likeControllers');


likeRouter.get('/like', likeController.createLike);
likeRouter.get('/dislike', likeController.dislike)


module.exports = { likeRouter };