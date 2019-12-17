const { Message } = require('../models/Message');
const { AppError } = require('../utils/AppError')
const { catchAsync } = require('../utils/CatchAsync');
const ObjectId = require('mongoose').Types.ObjectId;

exports.getAllMessage = catchAsync( async(req, res, next)=>{
    const sentTo = `${req.params.friendID}`;
    const sentBy = `${req.user}`;
    
    if(ObjectId.isValid(sentTo) && ObjectId.isValid(sentBy)){
        let roomChat = null;

        if(sentTo > sentBy){
            roomChat = `${sentBy}-${sentTo}`
        }else{
            roomChat = `${sentTo}-${sentBy}`;
        }
        const messages = await Message.find({roomChat}); // return [] if have no message
        res.status(200).send({
            status: 'success',
            data: messages
        })
    }else{
        next(new AppError(400, 'User id is invalid'))
    }
    
})

exports.createMessage = catchAsync( async (req, res, next)=>{
    const sentTo = `${req.params.friendID}`;
    const sentBy = `${req.user}`;
    const { message } = req.body;
    if(message) {
        if(ObjectId.isValid(sentTo) && ObjectId.isValid(sentBy)){
            let roomChat = null;
    
            if(sentTo > sentBy){
                roomChat = `${sentBy}-${sentTo}`
            }else{
                roomChat = `${sentTo}-${sentBy}`;
            }
            const message = new Message({
                sentBy,
                sentTo,
                roomChat
            });
            const newMessage = await message.save();
            res.status(200).send({
                status: 'success',
                data: newMessage
            })
        }else{
            next(new AppError(400, 'User id is invalid'))
        }
    }else{
        next( new AppError(400, 'Missing required field'))
    }
    
})