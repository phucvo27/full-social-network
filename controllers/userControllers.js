const { User } = require('../models/User');
const { AppError } = require('../utils/AppError');
const { catchAsync } = require('../utils/CatchAsync');
const ObjectId = require('mongoose').Types.ObjectId;

const { sendNotifications } = require('../utils/redis-socket');


exports.friendRequest = catchAsync( async (req, res, next)=>{
    const { friendID } = req.params;
    console.log('in route add friend')
    if(ObjectId.isValid(friendID)){
        const userIsRequired = await User.findById(friendID);
        if(userIsRequired){
            //const isSuccess = await user.addFriendRequest(req.user, userIsRequired); // return true if success
            if(true){
                const body = {
                    type: 'friend-request',
                    owner: {
                        uid: req.user._id,
                        username: req.user.username,
                        avatar: req.user.avatar
                    }
                }

                sendNotifications('notification', `${userIsRequired._id}`, body);
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
        if(friend){
            const newFriend = await req.user.acceptAndDenyFriend(friend);
            if(newFriend){
                const body = {
                    type: 'accept-request',
                    owner: newFriend
                }

                sendNotifications('notification', newFriend.uid, body); // send notification for that user , let him know his request is accepted
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

exports.getUserInfor = catchAsync( async(req, res, next)=>{
    const { id } = req.params;
    if(ObjectId.isValid(id)){
        const user = await User.findById(id);
        res.status(200).send({
            status: 'success',
            data: user
        })
    }else{
        next( new AppError(500, 'Your id is invalid'))
    }

})

exports.getCurrentUser = catchAsync( async(req, res, next)=>{
    res.status(200).send({
        status: 'success',
        data: req.user
    })
})