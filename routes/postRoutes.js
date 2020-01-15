const postRouter = require('express').Router();
const postControllers = require('../controllers/postControllers');
const { protectRoute } = require('../utils/protectRoute');
const { commentRouter } = require('./commentRoutes');
const { likeRouter } = require('./likeRoutes');
const { upload } = require('../utils/HandleUploadImage');

postRouter.use(protectRoute);

postRouter.use('/:postID/comments', commentRouter);
postRouter.use('/:postID/likes', likeRouter);

postRouter
    .route('/')
    .post(upload.single('file'), postControllers.resizeImageInPost ,postControllers.createPost)

postRouter.get('/:uid/all', postControllers.getAllPost)
postRouter
    .route('/:postID')
    .get(postControllers.getPost)
    .put(upload.single('file'), postControllers.resizeImageInPost ,postControllers.updatePost)
    .delete(postControllers.deletePost)



module.exports = { postRouter }