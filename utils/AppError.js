class AppError extends Error {

    constructor(statusCode = 200, message){
        super(message);
        this.statusCode = statusCode;

    }
}


module.exports = { AppError }