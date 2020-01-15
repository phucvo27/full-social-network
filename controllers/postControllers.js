const { Post } = require('../models/Post');
const { AppError } = require('../utils/AppError');
const { catchAsync } = require('../utils/CatchAsync');
const ObjectId = require('mongoose').Types.ObjectId;
const sharp = require('sharp');

exports.getAllPost = catchAsync(async (req, res, next)=>{
    const uid = req.params.uid;
    
    const posts = await Post.aggregate(
        [
            {
                $match: {owner: new ObjectId(uid)}
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'owner',
                    foreignField: '_id',
                    as: 'ownerTemp'
                }
            },  
            {
                $addFields: {
                    "owner.username": {$arrayElemAt: ["$ownerTemp.username", 0]},
                    "owner.uid": {$arrayElemAt: ["$ownerTemp._id", 0]},
                    "owner.avatar": {$arrayElemAt: ["$ownerTemp.avatar", 0]}
                }
            },
            {
                $lookup: {
                    from: 'likes',
                    localField: '_id',
                    foreignField: 'postID',
                    as: 'likes'
                }
            },
              
            {
                $lookup: {
                    from: 'comments',
                    localField: '_id',
                    foreignField: 'postID',
                    as: 'comments'
                }
            },
            {
                $addFields: {
                    numLikes: {$size: "$likes"},
                    numComments: {$size: "$comments"}
                }
            },
            {
                $project: {
                    ownerTemp: 0
                }
            },
            {
                $sort: {
                    created_at: -1
                }
            }
        ]
    );
    res.status(200).send({
        status: 'success',
        data: posts
    })
});

exports.resizeImageInPost = catchAsync(async(req, res, next)=>{
    if(!req.file){
        return next();
    }
    req.file.filename = `post-${req.user._id}-${Date.now()}`;
    req.filePath = `public/img/posts/${req.file.filename}.jpeg`
    await sharp(req.file.buffer)
            .resize(800 ,600)
            .toFormat('jpeg')
            .jpeg({quality: 90})
            .toFile(req.filePath);
    next();
})

exports.createPost = catchAsync(async (req, res, next)=>{
    const { content, withImage } = req.body;
    if(!withImage){
        const post = new Post({
            content,
            withImage,
            owner: req.user._id
        });
        const newPost = await post.save();
    
        res.status(200).send({
            message: 'success',
            data: newPost
        })
    }else{
        const post = new Post({
            content,
            withImage,
            image: req.filePath,
            owner: req.user._id
        })
        const newPost = await post.save();
    
        res.status(200).send({
            message: 'success',
            data: newPost
        })
    }
})


exports.updatePost = catchAsync( async (req, res, next)=>{
    const postID = req.params.postID;
    const { content, withImage } = req.body;
    if(ObjectId.isValid(postID)){
        const post = await Post.findById(postID);
        if(post){
            console.log(content);
            console.log(withImage)
            if(content || withImage){
                if(content){
                    post.content = content;
                }
                if(withImage){
                    // still not coding
                }
                const newPost = await post.save();
                res.status(200).send({
                    status: 'success',
                    message: 'update success',
                    data: newPost
                })
            }else{
                next(new AppError(400, 'Missing required field'))
            }
        }else{
            console.log('post is not exist')
            next(new AppError(400, 'Your post doesnt exist'));
        }
    }else{
        next(new AppError(400, 'Post id is invalid'))
    }
    
})


exports.deletePost = catchAsync(async(req, res, next)=>{
    const postID = req.params.postID;
    if(ObjectId.isValid(postID)){
        try {
            const postRemoved = await Post.findOneAndDelete({_id: postID});// return the document that is removed
            res.status(200).send({
                status: 'success',
                message: 'Your post is removed',
                data: postRemoved
            })
        }catch(e){
            next(new AppError(500, 'Could not delete the post'))
        }
    }else{
        next(new AppError(400, 'Post id is invalid'))
    }
    
})

exports.getPost = catchAsync(async(req, res, next)=>{
    const postID = req.params.postID;
    // Checking post id is valid -> if valid it must have 12 character , and after casting it will be same 
    if(ObjectId.isValid(postID)){
        const post = await Post.findById(postID);
        if(post){
            res.status(200).send({
                status: 'success',
                data: post
            })
        }else{
            next(new AppError(404, 'Your post doesnt exist'))
        }
    }else{
        next(new AppError(400, 'Your post id is invalid'))
    }
})