const socketIO = require('socket.io');


function memoizeSocket() {
    let io;

    return function(httpServer = null) {
        if(httpServer){
            if(!io){
                io = socketIO(httpServer);
                return io;
            }else{
                return io;
            }
        }else{
            return null;
        }
    }
}

const getIO = memoizeSocket();

module.exports = { getIO };