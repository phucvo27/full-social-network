const http = require('http');
// const socketIO = require('socket.io');
const { app } = require('./app');
const { getIO } = require('./socket')
const httpServer = http.createServer(app);


const PORT = process.env.PORT || 5000;

// const io = socketIO(httpServer);

const io = getIO(httpServer);

io.on("connection", (socket)=>{
    console.log("new connection");

    socket.on('push-login', (data)=>{
        console.log(data);
        socket.emit('login-succes', {
            message: 'get from emit of user',
            id: socket.id
        });
    })
    socket.on('header', (data)=>{
        console.log(data);
        socket.emit('header-res', 'i got your message')
    })
})

httpServer.listen(PORT, ()=>{
    console.log(`Server is starting at ${PORT}`)
})