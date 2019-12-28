const { Post } = require('../models/Post');
const { Like } = require('../models/Like');
const ObjectId = require('mongoose').Types.ObjectId;
const { AppError } = require('../utils/AppError');
const { catchAsync } = require('../utils/CatchAsync');

exports.createLike = catchAsync(async (req, res, next)=>{
    const postID = req.params.postID;
    const owner = req.user._id;

    if(ObjectId.isValid(postID)){
        const post = await Post.findById(postID);
        if(post){
            const like = new Like({
                postID,
                owner
            });
            try{
                await like.save();
                res.status(200).send({
                    status: 'success',
                    message: 'you are liked that post'
                })
            }catch(e){
                if(e.message.indexOf('duplicate key error') !== -1){
                    next(new AppError(400, 'You also liked this post'))
                }
            }
            
        }else{
            next( new AppError(404, 'Your Post doesnt exist'))
        }
        
    }else{
        next( new AppError(400, 'Post id is invalid'))
    }
})

exports.dislike = catchAsync(async(req, res, next)=>{
    const postID = req.params.postID;
    const owner = req.user._id;

    if(ObjectId.isValid(postID)){
        const post = await Post.findById(postID);
        if(post){
            await Like.findOneAndDelete({
                postID,
                owner
            })
            res.status(200).send({
                status: 'success',
                message: 'you are disliked that post'
            })
        }else{
            next( new AppError(404, 'Your Post doesnt exist'))
        }
        
    }else{
        next( new AppError(400, 'Post id is invalid'))
    }
})