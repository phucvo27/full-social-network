const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'please provide your name'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'please provide an email address'],
        unique: true,
        trim: true,
        validate: {
            validator: function(email){
                return validator.isEmail(email)
            },
            message: (email) => `${email} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true , 'please provide a password'],
        minlength: 6
    },
    avatar: {
        type: String,
        default: null
    },
    thumb: {
        type: String,
        default: null
    },
    friends: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        default: []
    },
    friendRequests: [
        {
            username: String,
            avatar: String,
            uid: mongoose.Schema.Types.ObjectId
        }
    ],
    tokens: {
        type: [String],
        default: []
    },
    tokenResetPassword: {
        type: String,
        default: null
    },
    tokenResetExpired: Date
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    },
    toJSON: {
        getters: true,
        virtuals: true
    }
});

userSchema.methods.toJSON = function(){
    const { username, _id, avatar, thumb, friends} = this;
    return {
        username,
        uid: _id,
        avatar,
        thumb,
        friends
    }
}

userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();

})

userSchema.methods.generateToken = async function(){
    const user = this;
    const token = jwt.sign(
        {
            uid: user._id,
        }, 
        'ThisIsTheSecretMessage',
        {
            expiresIn: '12h'
        })
    user.tokens = [...user.tokens, token];
    try {
        await user.save();
        return token;
    }catch(e){
        throw new Error('Could not generate new Token');
    }
    
}

userSchema.methods.isTokenStillValid = async function(token){
    const user = this;

    const tokenIndex = user.tokens.findIndex( item => item === token);
    if(tokenIndex !== -1){
        return true;
    }else{
        throw new Error('Token is invalid')
    }
}

userSchema.statics.verifyAccount = async function(email, password){
    const User = this;

    const user = await User.findOne({email}); // return null if email doesnt exist

    if(user){
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(isCorrectPassword){
            return user;
        }else{
            throw new Error('Your password is not valid')
        }
    }else{
        throw new Error('Your email is not valid')
    }
}


const User = mongoose.model('User', userSchema);

module.exports = { User };