const { Post } = require('../../models/Post');
const request = require('supertest');
const ObjectId = require('mongoose').Types.ObjectId;
const jwt = require('jsonwebtoken');


const userOneID = new ObjectId();
const token1 = jwt.sign({uid: userOneID}, 'secretkeytest');

const userOne = {
    _id: userOneID,
    username: 'bushjdo',
    email: 'bushjdo@gmail.com',
    password: 'thisispassword',
    tokens: [
        token1
    ]
}
