const express = require('express');

const app = express();


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


module.exports = { app }