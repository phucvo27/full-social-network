const http = require('http');
const { app } = require('./app');
const socketIO = require('./socket');
const { saveSocketID } = require('./utils/redis-socket');
const httpServer = http.createServer(app);


const PORT = process.env.PORT || 5000;

// const io = socketIO(httpServer);

const io = socketIO.init(httpServer);



io.on("connection", (socket)=>{
    console.log("new connection");
    const { uid } = socket.handshake.query
    saveSocketID(uid, socket.id);
    console.log(uid)
    socket.emit('login-succes', {
        message: 'get from emit of user',
        id: socket.id
    });
    socket.on('header', (data)=>{
        console.log(data);
        socket.emit('header-res', 'i got your message')
    })
})

httpServer.listen(PORT, ()=>{
    console.log(`Server is starting at ${PORT}`)
})

module.exports = { httpServer };