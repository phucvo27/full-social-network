const jwt = require('jsonwebtoken');
const { AppError } = require('./AppError');
const { User } = require('../models/User');

exports.protectRoute = async (req, res, next)=>{
    const token = req.cookies.jwt;
    if(token){
        try {
            const tokenData = jwt.verify(token, 'ThisIsTheSecretMessage');
            console.log(tokenData)
            const user = await User.findById(tokenData.uid); // return null if doc doesnt exist
            
            if(user){
                const isValid = user.isTokenStillValid(token);
                if(isValid){
                    
                    req.user = tokenData.uid;
                    next();
                }else{
                    next(new AppError(400, 'Invalid Token'))
                }
            }else{
                next(new AppError(400, 'Invalid User'))
            }
        }catch(e){
            console.log(e)
            next(new AppError(400, 'Your token is invalid'))
        }
    }else{
        next(new AppError(400, 'Please Login first'))
    }
}