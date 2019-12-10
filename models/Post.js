const mongoose = require('mongoose');
const { Like } = require('./Like');
const { Comment } = require('./Comment');

const postSchema = new mongoose.Schema({
    title: String,
    withImage: {
        type: Boolean,
        default: false
    },
    image: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    toJSON: {
        virtuals: true,
        getters: true
    }
})

// create number of likes of post
postSchema.virtual('likes').get( async function(){
    console.log(this);
    const listLike = await Like.find({postID: this._id});
    return listLike.length;
})

// postSchema.virtual('likes', {
//     ref: 'Like',
//     localField: '_id',
//     foreignField: 'postID'
// })

// create number of likes of post
postSchema.virtual('comments').get( async function(){
    const comments = await Comment.find({postID: this._id });
    return comments.length;
})

const Post = mongoose.model('Post', postSchema);

module.exports = { Post }