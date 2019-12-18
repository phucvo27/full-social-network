const multer = require('multer');
const { AppError } = require('./AppError')
const storage = multer.memoryStorage(); // will be stored in memory 

const fileFilter = (req, file, cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null, true)
    }else{
        cb(false, new AppError(400, 'Only accept image'))
    }
}

const upload = multer({
    storage,
    fileFilter
})

module.exports = { upload }
