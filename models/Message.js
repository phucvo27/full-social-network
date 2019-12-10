const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    sentBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sentTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    roomChat: {
        type: String,
        required: [true, 'Must provide the room chat']
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = { Message }