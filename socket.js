const socketIO = require('socket.io');


function memoizeSocket() {
    let io;

    return function(httpServer) {
        if(!io){
            io = socketIO(httpServer);
            return io;
        }else{
            return io;
        }
    }
}

const getIO = memoizeSocket();

module.exports = { getIO };