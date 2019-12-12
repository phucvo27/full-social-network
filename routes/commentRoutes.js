const commentRouter = require('express').Router({ mergeParams: true });
const commentController = require('../controllers/commentControllers');


commentRouter
    .route('/')
    .post(commentController.createComment)

commentRouter
    .route('/commentID')
    .put(commentController.updateComment)
    .delete(commentController.deleteComment)


module.exports = { commentRouter };