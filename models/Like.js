const mongoose = require('mongoose');


const likeSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    postID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }
})


likeSchema.pre('save', function(next){

    next();
})

const Like = mongoose.model('Like', likeSchema);

module.exports = { Like }