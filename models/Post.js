const mongoose = require('mongoose');
const { Like } = require('./Like');
const { Comment } = require('./Comment');

const postSchema = new mongoose.Schema({
    content: String,
    withImage: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        default: null
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Need to have owner']
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


postSchema.virtual('likes', {
    ref: 'Like',
    localField: '_id',
    foreignField: 'postID'
})

postSchema.pre(/^find/, function(next){

    console.log('in find middeware')
    this.populate({
        path: 'owner',
        select: 'username _id'
    })
    next();
})

// create number of likes of post
postSchema.virtual('comments').get( async function(){
    const comments = await Comment.find({postID: this._id });
    return comments.length;
})

const Post = mongoose.model('Post', postSchema);

module.exports = { Post }