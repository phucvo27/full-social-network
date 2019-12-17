const { AppError } = require('../utils/AppError')

const catchAsync = callback =>{
    return (req, res, next)=>{
        callback(req, res, next).catch(e => {
            next(new AppError(400, e.message));
        })
    }
}


module.exports = { catchAsync }