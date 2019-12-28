const redis = require('redis');
const { promisify } = require('util');
const { getIO } = require('../socket');
const client = redis.createClient();
client.get = promisify(client.get); // making client.get to Promise version


// get socket id based on uid

const getSocketID = async (uid) => {
    const socketID = await client.get(uid);
    return socketID;
}

exports.saveSocketID = async (uid, socketID) => {
    try{
        client.set(`${uid}`, `${socketID}`);
    }catch(e){
        throw new Error('Could not set key in redis')
    }
}

exports.sendNotifications = ( type, uid , body = {})=>{
    const io = getIO();
    const socketID = getSocketID(uid);
    if(type){
        if(type === 'message'){
            io.to(socketID).emit('newMessage', body);
        }else if(type === 'notification'){
            // body : { uid , username , avatar };
            if(body.type === 'friend-request'){
                io.to(socketID).emit('friend-request', body);
            }else if(body.type === 'liked'){
                io.to(socketID).emit('like', body);
            }else if(body.type === 'comment'){
                io.to(socketID).emit('comment', body);
            }
        }
        
    }else{
        throw new Error('Missing Type')
    }
    
}