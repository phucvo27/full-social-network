const mongoose = require('mongoose');
const validator = require('validator')
const bcryptjs = require('bcryptjs');

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
            message: `${email} is not a valid email`
        }
    },
    password: {
        type: String,
        required: [true , 'please provide a password'],
        minlength: 6
    },
    passwordConfirm: {
        type: String,
        required: [true, 'please provide the confirm of your password']
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
    ]
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
    const { username, uid, avatar,} = this;
    return {
        username,
        uid,
        avatar,
        thumb
    }
}

userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined; 
    next();

})

const User = mongoose.model('User', userSchema);

module.exports = { User };