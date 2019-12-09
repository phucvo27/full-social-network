const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const mongoose = require('mongoose');
mongoose
    .connect('mongodb://localhost:27017/facebooks', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log('Connect DB success')
    })
    .catch((e)=>{
        console.log('Could not connect DB')
    })

app.use(cookieParser());

app.use(bodyParser.json({ limit: '100kb'}));
app.use(bodyParser.urlencoded({extended: true})); // handling form



app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res)=>{
    res.send('Hi from server')
});

app.get('/api/test', (req, res)=>{
    res.send({
        test: 'This is testing message'
    })
})

app.use((err, req, res, next)=>{
    res.status(err.statusCode).send({
        message: err.message
    })
})

module.exports = { app }