const catchAsync = callback =>{
    return (req, res, next)=>{
        callback(req, res, next).catch(e => {
            next(e);
        })
    }
}


module.exports = { catchAsync }