const http = require('http');
const socketIO = require('socket.io');
const { app } = require('./app');

const httpServer = http.createServer(app);


const PORT = process.env.PORT || 5000;

const io = socketIO(httpServer);

io.on("connection", (socket)=>{
    console.log("new connection")
})

httpServer.listen(PORT, ()=>{
    console.log(`Server is starting at ${PORT}`)
})