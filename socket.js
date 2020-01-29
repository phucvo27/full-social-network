let io;
// const socketIO = require('socket.io');


// function memoizeSocket() {
//     let io;

//     return function(httpServer = null) {
//         if(!io){
//             io = socketIO(httpServer);
//             return io;
//         }else{
//             return io;
//         }
//     }
// }

// const getIO = memoizeSocket();

module.exports = { 
    init: (httpServer)=>{
        io = require('socket.io')(httpServer);
        return io;
    },
    getIO: ()=>{
        if(!io){
            console.log('Could not initialize socket')
            return null;
        }
        return io;
    }
};