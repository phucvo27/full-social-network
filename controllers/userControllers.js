const { User } = require('../models/User');
const { AppError } = require('../utils/AppError');
const { catchAsync } = require('../utils/CatchAsync');
const ObjectId = require('mongoose').Types.ObjectId;

const { sendNotifications } = require('../utils/redis-socket');


exports.friendRequest = catchAsync( async (req, res, next)=>{
    const { friendID } = req.params;
    console.log('in route add friend')
    if(ObjectId.isValid(friendID)){
        const user = await User.findById(friendID);
        if(user){
            const friend = await user.addFriendRequest(req.user);
            if(friend){
                const body = {
                    type: 'friend-request',
                    ...friend
                }

                sendNotifications('notification', friend.uid, body);
                res.status(200).send({
                    status: 'success'
                })
            }else{
                next(new AppError(500, 'Could not send request'))
            }
        }else{
            next(new AppError(400, 'Could not find that User'))
        }
    }else{
        next(new AppError(400, 'Your Id is invalid'))
    }
})

exports.acceptFriendRequest = catchAsync( async (req, res, next)=>{
    const { friendID } = req.params;
    if(ObjectId.isValid(friendID)){
        const friend = await User.findById(friendID);
        if(user){
            const newFriend = await req.user.acceptAndDenyFriend(friend);
            if(newFriend){
                const body = {
                    type: 'accept-request',
                    ...newFriend
                }

                sendNotifications('notification', newFriend.uid, body);
                res.status(200).send({
                    status: 'success'
                })
            }else{
                next(new AppError(500, 'Please try later'))
            }
        }else{
            next(new AppError(400, 'Could not find that User'))
        }
    }else{
        next(new AppError(400, 'Your Id is invalid'))
    }
})

exports.denyFriendRequest = catchAsync( async (req, res, next)=>{
    const { friendID } = req.params;
    if(ObjectId.isValid(friendID)){
        const user = await User.findById(friendID);
        if(user){
            const friend = await user.acceptAndDenyFriend(req.user, 'deny');
            if(friend){
                res.status(200).send({
                    status: 'success'
                })
            }else{
                next(new AppError(500, 'Please try later'))
            }
        }else{
            next(new AppError('Could not find that User'))
        }
    }else{
        next(new AppError('Your Id is invalid'))
    }
})

