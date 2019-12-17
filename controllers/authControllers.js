const { User } = require('../models/User');
const { AppError } = require('../utils/AppError');

const { catchAsync } = require('../utils/CatchAsync')
const jwt = require('jsonwebtoken');

const generateToken = async (res, user) => {
    try{
        const token = await user.generateToken();
        // cookie will be expired in 12h 
        
        const cookieOptions = {
            httpOnly: true,
            expires: new Date(Date.now() + 12*60*60*1000)
        }
        if(process.env.NODE_ENV === "production") cookieOptions.secure = true;
        res.cookie('jwt', token, cookieOptions);
        res.status(200).send({
            status: 'success',
            token,
            data: {
                user
                
            }
        })
    }catch(e){
        res.status(500).send({
            status: 'fail',
            message: e.message
        })
    }
    
}
exports.loginHandler = catchAsync( async (req, res, next )=>{
    const { email , password } = req.body;
    console.log(email, password)
    try {
        const user = await User.verifyAccount(email, password);
        generateToken(res, user);
    }catch(e){
        next(new AppError(400, e.message))
    }
    
})

exports.logOutHandler = catchAsync( async (req, res, next)=>{
    const cookieOptions = {
        httpOnly: true
    }
    if(process.env.NODE_ENV === "production") cookieOptions.secure = true;
    res.cookie('jwt', '');
    res.status(200).send({
        status: 'success',
        message: 'You are logout success'
    })
})
exports.signUpHandler = catchAsync( async (req, res, next)=>{
    const { username, email, password, passwordConfirm } = req.body;

    // if missing anything of them , throw an Error
    if(username && email && password && passwordConfirm ){

        if(password === passwordConfirm){
            const user = new User({
                username,
                email,
                password
            });
            try{
                const newUser = await user.save();
                generateToken(res, newUser)
            }catch(e){
                //console.log(e)
                next(new AppError(500, 'Can not register new user'))
            }
        }else{
            next(new AppError(400, 'Your password confirm is not same as password'))
        }
    }else{
        next(new AppError(400, 'Missing required field, please check again'))
    }
})

exports.checkSession = catchAsync( async (req, res, next)=>{
    const token = req.cookies.jwt;
    console.log(req.cookies)
    console.log(token)
    if(token){
        try {
            const tokenData = jwt.verify(token, 'ThisIsTheSecretMessage');
            console.log(tokenData)
            const user = await User.findById(tokenData.uid); // return null if doc doesnt exist
            if(user){
                const isValid = user.isTokenStillValid(token);
                if(isValid){
                    res.status(200).send({
                        status: 'success',
                        data: user
                    })
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
        console.log('eeor')
        next(new AppError(400, 'Please Login first'))
    }
})