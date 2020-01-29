const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { authRouter } = require('./routes/authRoutes');
const { postRouter } = require('./routes/postRoutes');
const { userRouter } = require('./routes/userRoutes');

const { messageRouter } = require('./routes/messageRoutes');
const cors = require('cors');

const app = express();
const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/facebooks-dev', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Connect DB success')
    })
    .catch((e)=>{
        console.log('Could not connect DB')
    })

app.use(express.static('public'))
app.use(cookieParser());

app.use(bodyParser.json({ limit: '100kb'}));
app.use(bodyParser.urlencoded({extended: true})); // handling form

const corsOptions = {
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: "http://localhost:3000",
    preflightContinue: false,
};
app.use(cors(corsOptions))
// app.use(async (req, res, next)=>{
//     const user = await User.findById("5df0a7f6193e780ea93b3e5f");
//     console.log(user);
//     next()
// })
// app.use(function(req, res, next) {
//     // res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     //res.header("Access-Controll-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE, PATCH")
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use((req, res, next)=>{
    //console.log(`new request at : ${req.path}`)
    next()
})

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);
app.use('/api/messages', messageRouter);

app.use((err, req, res, next)=>{
    res.status(err.statusCode).send({
        message: err.message
    })
})

module.exports = { app }