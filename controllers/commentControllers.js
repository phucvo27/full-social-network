const { Comment } = require('../models/Comment');
const { Post } = require('../models/Post');
const ObjectId = require('mongoose').Types.ObjectId;
const { catchAsync } = require('../utils/CatchAsync');
const { AppError } = require('../utils/AppError');


exports.createComment = catchAsync(async (req, res, next)=>{
    const postID = req.params.postID;
    const owner = req.user;
    const { content } = req.body;
    if(content){
        if(postID.length === 12 && (new ObjectId(postID) === postID)){
            // Check does that post still exist
            try{
                const post = await Post.findById(postID);
                if(post){
                    const comment = new Comment({
                        postID,
                        owner,
                        content
                    })
                    const newComment = await comment.save();
                    res.status(200).send({
                        status: 'success',
                        data: newComment
                    })
                    
                }else{
                    next( new AppError(400, 'The post doesnt exist'))
                }
            }catch(e){
                next( new AppError(400, 'Something went wrong when finding that post'))
            }
        }else{
            next( new AppError(400, 'Post id is invalid'))
        }
    }else{
        next( new AppError(400, 'Missing required field'))
    }
})

exports.updateComment = catchAsync( async(req, res, next)=>{
    const commentID = req.params.commentID;
    const { content } = req.body;
    if(content){
        // checking commentID
        if(commentID.length === 12 && ( new ObjectId(commentID) === commentID)){
            try {
                const comment = await Comment.findById(commentID);
                if(comment){
                    comment.content = content;
                    const newComment = await comment.save();
                    res.status(200).send({
                        status: 'success',
                        data: newComment
                    })
                }else{
                    next(new AppError(400, 'The comment doesnt exist'))
                }
            }catch(e){
                next(new AppError(500, 'Something went wrong when find that comment'))
            }
        }else{
            next( new AppError(400, 'Comment id is invalid'))
        }
    }else{
        next( new AppError(400, 'Missing required field'))
    }
})

exports.deleteComment = catchAsync( async (req, res, next)=>{
    const commentID = req.params.commentID;
    if(commentID.length === 12 && (new ObjectId(commentID) === commentID)){
        const commentRemoved = await Comment.findByIdAndDelete(commentID);
        res.status(200).send({
            status: 'success',
            data: commentRemoved
        })
    }else{
        next(new AppError(400, 'Comment id is invalid'))
    }
})